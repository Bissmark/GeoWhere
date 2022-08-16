import React from "react";
import GuessMap from "./GuessMap";
import Streetview from "./Streetview";


function PlayTrip () {
  return (
    <>
      <Streetview />
      <GuessMap />
      <div>
      <button className="guessButton">Guess</button>
      </div>

    </>
  );
};

export default PlayTrip;