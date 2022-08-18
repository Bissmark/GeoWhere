import React from "react";
import GuessMap from "./GuessMap";
import Streetview from "./Streetview";
import Map from "./Map";
import { useState } from "react";
import { score } from "./Map";
import Round from "./Round";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function PlayTrip() {
  const [view, setView] = useState(0);
  const [markerLocation, setMarkerLocation] = useState([]);
  let [round, setRound] = useState(1);
  const [locationNumber, setLocationNumber] = useState(randomIntFromInterval(1, 10));
  
  const updateMarkers = (lat, lng) => {
    setMarkerLocation([lat,lng])
    console.log('this one is good', markerLocation)
  }

  const guessLocation = () => {
    setView(view ? view - 1 : view + 1);
  }

  const nextRound = () => {
    setView(view ? view - 1 : view + 1);
    setLocationNumber(randomIntFromInterval(1, 10));
    if (round < 5) {
      setRound(round + 1); 
      console.log("Round:", round); 
    }
  }

  return (
    <>
      <div className="my-9">
        {!view ? (
          <div>
            <Streetview locationNumber={ locationNumber } />
            <GuessMap updateMarkers={updateMarkers} guessLocation={guessLocation}/>
            {/* <div className="round"> */}
              <Round className="round" round={ round }/>
            {/* </div> */}
          </div>
        ) : (
          <div>
            <h1>Score: { score }</h1>
            <button className="guessButton" onClick={() => nextRound()}>
              Next Round
            </button>
            <Map markerValue={markerLocation}/>
          </div>
        )}
      </div>
    </>
  );
}

export default PlayTrip;