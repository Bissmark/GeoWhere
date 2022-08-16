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
<<<<<<< HEAD
      <div>
=======
      <Round />
      <Timer />
>>>>>>> b92f9bc73d9d2e1b709ce09b0beb6845652b2cc2
      <button className="guessButton">Guess</button>
      </div>

    </>
  );
};

export default PlayTrip;