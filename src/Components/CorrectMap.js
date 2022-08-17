import React from "react";
import Scores from "./scores"
import Map from "./Map";

function CorrectMap () {
  return (
    <>
      <Map />
      <div>
        <Scores />
        <button className="newRound">Next Round</button>
      </div>
    </>
  );
};

export default CorrectMap;