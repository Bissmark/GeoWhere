import React from "react";
import GuessMap from "./GuessMap";
import Streetview from "./Streetview";
import Map from "./Map";
import { useState } from "react";
import { score } from "./Map";

function PlayTrip() {
  const [view, setView] = useState(0);
  const [markerLocation, setMarkerLocation] = useState([]);
  //const [score, setScore] = useState(0);
  
  const updateMarkers = (lat, lng) => {
    setMarkerLocation([lat,lng])
    console.log('this one is good', markerLocation)
  }

  const guessLocation = () => {
    setView(view ? view - 1 : view + 1);
    console.log('guessed location', view);
  }

  // const addScore = () => {
  //   score = score + score;
  //   console.log(score);
  // }

  const TotalScore = score + score;

  return (
    <>
      <div className="my-9">
        {!view ? (
          <div>
            <Streetview />
            <GuessMap updateMarkers={updateMarkers} guessLocation={guessLocation}/>
          </div>
        ) : (
          <div>
            <Map markerValue={markerLocation}/>
            <h1>Score: { score }</h1>
            <h1>TotalScore: { TotalScore }</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default PlayTrip;