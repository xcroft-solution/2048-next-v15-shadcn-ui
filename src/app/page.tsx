"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Tile from "@/components/Tile";
import {
  initializeGrid,
  moveGrid,
  isGameOver,
  Direction,
  AnimatedGridType,
} from "@/utils/gameLogic";

export default function Game2048() {
  const [grid, setGrid] = useState<AnimatedGridType>();
  const [score, setScore] = useState(0);
  const [isGameOverDialogOpen, setIsGameOverDialogOpen] = useState(false);

  const startNewGame = () => {
    setGrid(initializeGrid());
    setScore(0);
    setIsGameOverDialogOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (isGameOverDialogOpen) return;

    let direction: Direction | null = null;
    switch (event.key) {
      case "ArrowUp":
        direction = "up";
        break;
      case "ArrowDown":
        direction = "down";
        break;
      case "ArrowLeft":
        direction = "left";
        break;
      case "ArrowRight":
        direction = "right";
        break;
    }

    if (direction && grid) {
      const { newGrid, scoreIncrease } = moveGrid(grid, direction);
      setGrid(newGrid);
      setScore((prevScore) => prevScore + scoreIncrease);

      if (isGameOver(newGrid)) {
        setIsGameOverDialogOpen(true);
      }
    }
  };

  useEffect(() => {
    startNewGame();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [grid, isGameOverDialogOpen]); //eslint-disable-line

  return (
    <div className="min-h-screen bg-[#faf8ef] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-[#faf8ef] border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-[#776e65]">
            2048 XCroft Solution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex justify-between items-center">
            <div className="text-xl font-semibold text-[#776e65]">
              Score: {score}
            </div>
            <Button
              onClick={startNewGame}
              className="bg-[#8f7a66] hover:bg-[#776e65] text-[#f9f6f2]"
            >
              New Game
            </Button>
          </div>
          <div className="aspect-square">
            <div className="grid grid-cols-4 gap-2 bg-[#bbada0] p-2 rounded-md h-full">
              {grid &&
                grid
                  .flat()
                  .map((tile, index) => (
                    <Tile
                      key={`${index}-${tile.value}`}
                      value={tile.value}
                      isNew={tile.isNew}
                      isMerged={tile.isMerged}
                    />
                  ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={isGameOverDialogOpen}
        onOpenChange={setIsGameOverDialogOpen}
      >
        <DialogContent className="bg-[#faf8ef] text-[#776e65]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Game Over!
            </DialogTitle>
            <DialogDescription className="text-[#776e65] text-lg text-center">
              Your final score is: {score}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex justify-center">
            <Button
              onClick={startNewGame}
              className="bg-[#8f7a66] hover:bg-[#776e65] text-[#f9f6f2]"
            >
              New Game
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
