import React, { useState } from "react";
import Quote from "../Quote/Quote";
import data from "../../data/data";
import Button from "../Button/Button";
import randomNumber from "../../utils/utils";
import TweetQuote from "../TweetQuote/TweetQuote";

export default function QuoteWrapper() {
  const [randomQuote, setRandomQuote] = useState(randomNumber(data.length));

  const handleClick = () => {
    setRandomQuote(randomNumber(data.length));
  };
  return (
    <div id="quote-box">
      <Quote
        quote={data[randomQuote].quote}
        author={data[randomQuote].author}
      />
      <div id="clickables">
        <Button onClick={handleClick} />
        <TweetQuote />
      </div>
    </div>
  );
}
