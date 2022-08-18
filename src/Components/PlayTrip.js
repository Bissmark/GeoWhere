import React from "react";
import GuessMap from "./GuessMap";
import Streetview from "./Streetview";
import Map from "./Map";
import { useState } from "react";
import { calculateDistance } from "../Utils/DistanceCalc";
import { locationCoordinates } from "./Locations";
import { Results } from "./Results";
import MapWrapper from "./MapWrapper";

function randomIntFromInterval() {
  return Math.floor(Math.random() * (locationCoordinates.length - 1 - 0 + 1) + 0);
}

function randomIntFromIntervalNotSameOne(oldNum) {
  let newNum = randomIntFromInterval();
  if (newNum !== oldNum) {
    return newNum;
  }
  return randomIntFromIntervalNotSameOne(oldNum);
}

function PlayTrip() {
  const [view, setView] = useState(0);
  const [markerLocation, setMarkerLocation] = useState([]);
  const [locationNumber, setLocationNumber] = useState(randomIntFromInterval());
  const [round, setRound] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [newRoundScore, setNewRoundScore] = useState(0);
  
  const updateMarkers = (lat, lng) => {
    setMarkerLocation([lat,lng]);
  };

  const guessLocation = () => {
    setView(view ? view - 1 : view + 1);
    updateRoundScore();
  };

  const nextRound = () => {
    setView(view ? view - 1 : view + 1);
    setLocationNumber(randomIntFromIntervalNotSameOne(locationNumber));
    setRound(round + 1);
  };

  const updateRoundScore = () => {
    let originalLocationCoords = locationCoordinates[locationNumber][0];
    let points = guessLocation
      ? calculateDistance(originalLocationCoords.lat, originalLocationCoords.lng, markerLocation[0], markerLocation[1])
      : 0;
      setNewRoundScore(points);
      setTotalScore(totalScore + points);
  }

  return (
      <div className="my-3">
        <MapWrapper totalScore={ totalScore } newRoundScore={ newRoundScore } round={ round }>
          { round === 6 && (
            <div>
              <Results totalScore={ totalScore }/>
            </div>
          )}
          { round !== 6 && !view && (
            <div>
              <Streetview locationNumber={ locationNumber } />
              <GuessMap updateMarkers={ updateMarkers } guessLocation={ guessLocation }/>
            </div>
          )}
          { round !== 6 && view && (
            <div>
              <button className="nextRound" onClick={ nextRound }>
                { round !== 6 ? 'Next Round' : 'Finish' }
              </button>
              <Map markerValue={ markerLocation } locationNumber={ locationNumber } />
            </div>
          )}
        </MapWrapper>
      </div>
  );
}

export default PlayTrip;