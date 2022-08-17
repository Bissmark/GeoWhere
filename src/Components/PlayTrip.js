import React from "react";
import GuessMap from "./GuessMap";
import Streetview from "./Streetview";
import Map from "./Map";
import { useState } from "react";

function PlayTrip() {
  const [view, setView] = useState(0);

  const [markerLocation, setMarkerLocation] = useState([]);
  
  const updateMarkers = (lat, lng) => {
    setMarkerLocation([lat,lng])
    console.log('this one is good', markerLocation)
  }

  return (
    <>
      <div className="my-9">
        <button id="switchView" onClick={() => setView(view ? view - 1 : view + 1)}>
          Switch
        </button>
        {!view ? (
          <div>
            <Streetview />
            <GuessMap updateMarkers={updateMarkers}/>
            <button className="guessButton" onClick={() => setView(view ? view - 1 : view + 1)} >Guess</button>
          </div>
        ) : (
          <Map markerValue={markerLocation}/>
        )}
      </div>
    </>
  );
}

export default PlayTrip;