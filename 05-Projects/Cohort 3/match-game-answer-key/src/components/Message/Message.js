// Message.js
import React from "react";

export default function Message({ matches, totalMatches, resetGame }) {
  return (
    <div className="message">
      {matches === totalMatches ? <h3>You Win!</h3> : <h3>Game Over</h3>}
      <p>
        You found {matches} matches out of a possible {totalMatches} matches. Good work!
      </p>
      <button onClick={resetGame} className="new-game-button">
        New Game
      </button>
    </div>
  );
}


