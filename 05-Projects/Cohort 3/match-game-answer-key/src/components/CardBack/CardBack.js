import React from "react";
import back from "../../assets/back.png";

export default function CardBack({ onClick }) {
  return (
    <button className="card" onClick={onClick}>
      <img src={back} alt="back of card" />
    </button>
  );
}
