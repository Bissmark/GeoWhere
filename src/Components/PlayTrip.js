import React from "react";
import GuessMap from "./GuessMap";
import Streetview from "./Streetview";


function PlayTrip () {
  return (
    <>
      <Streetview />
      <GuessMap />
      <button className="guessButton">Guess</button>
    </>
  );
};

export default PlayTrip;