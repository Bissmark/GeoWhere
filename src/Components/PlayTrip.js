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

  const guessLocation = () => {
    setView(view ? view - 1 : view + 1);
    console.log('guessed location', view);
  }

  return (
    <>
      <div className="my-9">
        {!view ? (
          <div>
            <Streetview />
            <GuessMap updateMarkers={updateMarkers} guessLocation={guessLocation}/>
          </div>
        ) : (
          <Map markerValue={markerLocation}/>
        )}
      </div>
    </>
  );
}

export default PlayTrip;