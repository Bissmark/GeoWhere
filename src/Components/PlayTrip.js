import React from "react";
import GuessMap from "./GuessMap";
import Streetview from "./Streetview";
import Round from "./Round";
import Timer from "./Timer";
import Scores from "./scores"
import { round } from "./Map";


// function _handleOnClick() {
//   round = round + 1;
// }

function PlayTrip () {

  

  return (
    <>
    <div className="my-9">
      <Streetview />
      <GuessMap />
      <Round />
      <Timer />
      <Scores />
      <button className="guessButton">Guess</button>
    </div>
    </>
  );
};

export default PlayTrip;