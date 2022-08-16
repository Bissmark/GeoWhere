import React from "react";
import GuessMap from "./GuessMap";
import Streetview from "./Streetview";
import Round from "./Round";
import Timer from "./Timer";


function PlayTrip () {
  return (
    <>
      <Streetview />
      <GuessMap />
      <Round />
      <Timer />
      <button className="guessButton">Guess</button>
    </>
  );
};

export default PlayTrip;