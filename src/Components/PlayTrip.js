import React from "react";
import GuessMap from "./GuessMap";
import Streetview from "./Streetview";
import Round from "./Round";
import Timer from "./Timer";


function PlayTrip () {
  return (
    <>
      <div className="my-9">
      <Streetview />
      <GuessMap />
      <Round />
      <Timer />
      
      <button className="guessButton">Guess</button>
      </div>

    </>
  );
};

export default PlayTrip;