import React, { useState, useEffect, useRef } from "react";
import CardGrid from "../CardGrid/CardGrid";
import cards from "../../data/cards";
import Matches from "../Matches/Matches";
import Timer from "../Timer/Timer";
import Message from "../Message/Message";
import randomNums from "../../utils/randomNums";
import totalMatches from "../../utils/totalMatches";

export default function Game() {
  // Managing state for cardData, flipped cards, number of matches, countdown timer, whether the game is in progress, setting up the game and possible matches.
  const [cardData, setCardData] = useState(cards);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matches, setMatches] = useState(0);
  const [time, setTime] = useState({ minutes: 10, seconds: "00" });
  const [gameOn, setGameOn] = useState(false);
  const [dealtCards, setDealtCards] = useState(randomNums());
  const dealtCardsArray = dealtCards.flat(1).map((card) => cardData[card]);
  const possibleMatches = totalMatches(dealtCardsArray);

  // Referances to timer and matches. This enables the highlight as the data changes.
  const scoreRef = useRef(null);
  const timerRef = useRef(null);

  // useEffect for managing flipping and un-flipping of cards
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (flippedCards.length === 2) {
        console.log(flippedCards);
        if (flippedCards[0].value === flippedCards[1].value) {
          setMatches(matches + 1);
          const newCardData = [...cardData];
          newCardData.forEach((card) => {
            if (
              card.value === flippedCards[0].value &&
              (card.id === flippedCards[0].id || card.id === flippedCards[1].id)
            ) {
              card.matched = true;
            }
          });
          setCardData(newCardData);
        } else {
          const newCardData = [...cardData];
          newCardData.forEach((card) => {
            if (card.flipped && !card.matched) {
              card.flipped = false;
            }
          });
          setCardData(newCardData);
        }
        setFlippedCards([]);
      }
    }, 1000);
    return () => clearTimeout(timeOutId);
  }, [flippedCards]);

  // Managing game countdown
  useEffect(() => {
    if (gameOn) {
      const timeOutId = setTimeout(() => {
        if (
          (time.minutes === 0 && time.seconds === "00") ||
          matches === possibleMatches
        ) {
          console.log("Game Over");
          setGameOn(false);
        } else if (time.seconds === "00") {
          setTime({ minutes: time.minutes - 1, seconds: 59 });
        } else {
          setTime({
            minutes: time.minutes,
            seconds:
              time.seconds - 1 < 10
                ? `0${time.seconds - 1}`
                : time.seconds - 1 || "00",
          });
        }
      }, 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [time, gameOn]);

  // Managing adding highlight to matches when user gets a match
  useEffect(() => {
    if (scoreRef.current) {
      scoreRef.current.classList.add('highlight');
      const timeoutId = setTimeout(() => {
        scoreRef.current.classList.remove('highlight');
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [matches]);
  
  // Managing adding highlight to timer each time a minute is removed, alerting user that time has elapsed.
  useEffect(() => {
    if (timerRef.current) {
      timerRef.current.classList.add('highlight');
      const timeoutId = setTimeout(() => {
        timerRef.current.classList.remove('highlight');
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [time.minutes]);
  
  // Function triggered on card click to flip the card
  const flipCard = (position) => {
    if (!gameOn) {
      setGameOn(true);
    }
    if (cardData[position].flipped || flippedCards.length === 2) {
      return;
    }
    const flippedCard = cardData[position];
    const newCardData = [...cardData];
    newCardData[position].flipped = !newCardData[position].flipped;
    setCardData(newCardData);
    setFlippedCards([...flippedCards, flippedCard]);
  };

  // Function triggered when "New Game" button is clicked
  const resetGame = () => {
    setCardData(
      cards.map((card) => ({ ...card, flipped: false, matched: false }))
    );
    setFlippedCards([]);
    setMatches(0);
    setTime({ minutes: 10, seconds: "00" });
    setGameOn(false);
    setDealtCards(randomNums());
  };

  return (
    <div id="game">
      <CardGrid
        cardData={cardData}
        dealtCards={dealtCards}
        flipCard={flipCard}
      />
      <div ref={scoreRef}>
      <Matches matches={matches} totalMatches={possibleMatches} />
      </div>
      <div ref={timerRef}>
      <Timer minutes={time.minutes} seconds={time.seconds} />
      </div>
      {!gameOn && time.minutes < 10 ? (
        <Message
          matches={matches}
          totalMatches={possibleMatches}
          resetGame={resetGame}
        />
      ) : null}
    </div>
  );
}
