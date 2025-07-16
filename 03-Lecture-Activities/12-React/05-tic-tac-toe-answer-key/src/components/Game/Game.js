import React, { useState } from "react";
import Board from "../Board/Board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentSquares, setCurrentSquares] = useState(
    history[history.length - 1]
  );

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setCurrentSquares(nextSquares);
    setXIsNext((prevState) => !prevState);
  }

  function jumpTo(step) {
    setCurrentSquares(history[step]);
    setXIsNext(step % 2 === 0);
  }

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
