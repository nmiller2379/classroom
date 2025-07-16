// Hero.js
import React from "react";
import logo from "../../assets/logo.png"; // Assuming you have a logo.png file in the assets directory

export default function Hero() {
  return (
    <div className="hero">
      <img src={logo} alt="Game Logo" className="hero-logo" />
      <div className="hero-content">
        <h1 className="hero-title">Memory Match Challenge</h1>
        <p className="hero-summary">
          Test your memory and find all the matching pairs of cards (two 10s, two Kings, etc.) before the time runs out! Flip the cards to reveal their faces, and match pairs to score. You have 10 minutes to find all the matches. Good luck!
        </p>
      </div>
    </div>
  );
}


