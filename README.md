# 2048 Game - Next.js v15 + Shadcn/ui

This is a modern implementation of the classic 2048 game using Next.js v15 for the frontend and **Shadcn/ui** for UI components. The game is interactive and fully responsive, ensuring an excellent user experience across different devices.

## Features

- Playable 2048 puzzle game with smooth animations.
- Modern UI using **Shadcn/ui** components for clean and intuitive design.
- Responsive layout for mobile, tablet, and desktop screens.
- Score tracking and high score persistence (via local storage).
- Simple and accessible controls.

## Demo

You can try the game live by visiting [2048 Game Demo](https://your-demo-link-here.com).

## Technologies Used

- **Next.js v15**: React framework for building server-rendered applications.
- **Shadcn/ui**: A UI component library used for modern and aesthetic UI elements.
- **CSS**: Styling for custom elements and layout.
- **JavaScript**: Game logic implemented in vanilla JS for simplicity and performance.

## Installation

Follow the steps below to run the 2048 game locally.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>=16.0.0)
- npm (>=8.0.0) or yarn (>=1.22.0)

### Clone the Repository

```bash
git clone https://github.com/your-username/2048-nextjs-shadcn-ui.git
cd 2048-nextjs-shadcn-ui
```

### Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Run the Development Server

After the dependencies are installed, start the development server:

```bash
npm run dev
```

Or:

```bash
yarn dev
```

Now, open [http://localhost:3000](http://localhost:3000) in your browser to play the game.

## Game Controls

- **Arrow Keys**: Use the arrow keys (Up, Down, Left, Right) to move the tiles.
- **Touch Controls**: On mobile, swipe in the respective direction to move tiles.

## Game Rules

- Combine matching tiles (e.g., two 2s) to create a tile with the sum of their values.
- The objective is to reach the tile with the value of 2048.
- The game ends when the board is full, and no more moves are possible.

## Contributing

We welcome contributions! If you'd like to improve or add features, please fork the repository and submit a pull request with your changes.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Implement your changes.
4. Run the game locally to ensure your changes work.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **2048**: The classic puzzle game designed by Gabriele Cirulli.
- **Next.js**: For making it easy to build React applications with server-side rendering and static site generation.
- **Shadcn/ui**: For providing an easy-to-use and customizable UI component library.