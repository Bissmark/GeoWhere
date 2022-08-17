import React from "react";
import GuessMap from "./GuessMap";
import Streetview from "./Streetview";
import Round from "./Round";
import Timer from "./Timer";
import Scores from "./scores"


function PlayTrip () {
  return (
    <>
      <Streetview />
      <GuessMap />
      <div>
        <Round />
        <Timer />
        <Scores />
        <button className="guessButton">Guess</button>
      </div>

    </>
  );
};

export default PlayTrip;