export type GridType = number[][]
export type Direction = 'up' | 'down' | 'left' | 'right'

export interface Tile {
  value: number
  isNew: boolean
  isMerged: boolean
}

export type AnimatedGridType = Tile[][]

export function initializeGrid(): AnimatedGridType {
  const grid: AnimatedGridType = Array(4).fill(null).map(() => Array(4).fill({ value: 0, isNew: false, isMerged: false }))
  addRandomTile(grid)
  addRandomTile(grid)
  return grid
}

function addRandomTile(grid: AnimatedGridType): void {
  const emptyCells: [number, number][] = []
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j].value === 0) {
        emptyCells.push([i, j])
      }
    }
  }

  if (emptyCells.length > 0) {
    const [i, j] = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    grid[i][j] = { value: Math.random() < 0.9 ? 2 : 4, isNew: true, isMerged: false }
  }
}

function rotateGrid(grid: AnimatedGridType, times: number): AnimatedGridType {
  let rotatedGrid = JSON.parse(JSON.stringify(grid)) as AnimatedGridType
  for (let i = 0; i < times; i++) {
    rotatedGrid = rotatedGrid[0].map((_, index) => 
      rotatedGrid.map(row => row[index]).reverse()
    )
  }
  return rotatedGrid
}

function moveLeft(grid: AnimatedGridType): { grid: AnimatedGridType; score: number } {
  let score = 0
  const newGrid = grid.map(row => {
    const filteredRow = row.filter(tile => tile.value !== 0)
    const newRow: Tile[] = []
    for (let i = 0; i < filteredRow.length; i++) {
      if (i + 1 < filteredRow.length && filteredRow[i].value === filteredRow[i + 1].value) {
        newRow.push({ 
          value: filteredRow[i].value * 2, 
          isNew: false, 
          isMerged: true 
        })
        score += filteredRow[i].value * 2
        i++
      } else {
        newRow.push({ ...filteredRow[i], isNew: false, isMerged: false })
      }
    }
    while (newRow.length < 4) {
      newRow.push({ value: 0, isNew: false, isMerged: false })
    }
    return newRow
  })
  return { grid: newGrid, score }
}

export function moveGrid(grid: AnimatedGridType, direction: Direction): { newGrid: AnimatedGridType; scoreIncrease: number } {
  let rotations = 0
  switch (direction) {
    case 'up':
      rotations = 3
      break
    case 'right':
      rotations = 2
      break
    case 'down':
      rotations = 1
      break
  }

  let newGrid = rotateGrid(grid, rotations)
  const { grid: movedGrid, score } = moveLeft(newGrid)
  newGrid = rotateGrid(movedGrid, (4 - rotations) % 4)

  if (JSON.stringify(grid) !== JSON.stringify(newGrid)) {
    addRandomTile(newGrid)
  }

  return { newGrid, scoreIncrease: score }
}

export function isGameOver(grid: AnimatedGridType): boolean {
  // Check if there are any empty cells
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j].value === 0) {
        return false;
      }
    }
  }

  // Check if there are any possible merges
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const currentValue = grid[i][j].value;
      if (
        (i < 3 && grid[i + 1][j].value === currentValue) ||
        (j < 3 && grid[i][j + 1].value === currentValue)
      ) {
        return false;
      }
    }
  }

  return true;
}

