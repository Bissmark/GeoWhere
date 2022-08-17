import React from "react";
import GuessMap from "./GuessMap";
import Streetview from "./Streetview";
import Round from "./Round";
import Timer from "./Timer";
import Scores from "./scores"
import { round } from "./Map";

function PlayTrip () {

  return (
    <>
    <div className="my-9">
      <Streetview />
      <GuessMap />
<<<<<<< HEAD
      <Round />
      <Timer />
      <Scores />
      <button className="guessButton">Guess</button>
=======
      
      <button className="guessButton">Guess</button>
      
>>>>>>> 926ea420cd9de61469ed0ec5b0f411ee00a5c401
    </div>
    </>
  );
};

export default PlayTrip;