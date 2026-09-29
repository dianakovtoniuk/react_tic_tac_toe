# Tic-Tac-Toe (React + TypeScript)

A Tic-Tac-Toe game implementation built during the React course (by Max Schwarzmüller), TypeScript and bundled with Vite.

---

## Features

- **Full Gameplay**: Player turn switching for two players (`X` and `O`).
- **Dynamic Player Names**: Ability to edit and save player names directly during the game.
- **Automatic Winner Detection**: Checking across 8 possible winning combinations.
- **Draw Handling**: Game over state handling when all 9 squares are filled without a winner.
- **Rematch Feature**: Quick board reset for a new game while preserving player names.
- **Move History Log**: Real-time tracking of selected board squares.
- **Immutable State Management**: Adherence to React Best Practices for updating arrays and objects.

---

## Tech Stack

- **Frontend**: React 18
- **Language**: TypeScript
- **Bundler**: Vite
- **Styling**: Pure CSS

---

## Getting Started

1. **Clone the repository:**
   git clone https://github.com/your-username/react_tictac_toe.git

2. **Navigate to the project directory:**
   cd react_tictac_toe

3. **Install dependencies:**
   npm install

4. **Run the development server:**
   npm run dev

---

## Project Structure

src/
├── assets/                  # Images and static assets
├── components/
│   ├── GameBoard.tsx        # 3x3 game board component
│   ├── GameOver.tsx         # Game results overlay and restart button
│   ├── Log.tsx              # List of turn history
│   └── Player.tsx           # Player card component with name editing
├── App.tsx                  # Main component with Lifted State
├── index.css                # Global CSS styles
├── main.tsx                 # Application entry point
└── winning-combinations.ts  # Array of winning combinations and types

---

## Key Concepts

- Lifting State Up to coordinate multiple components.
- Deriving Computed Values instead of creating redundant state hooks.
- Immutable state updates for nested arrays (`[...prev.map(row => [...row])]`).
- Strict typing of props and events using TypeScript.
