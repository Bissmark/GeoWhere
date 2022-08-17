import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, Polyline } from '@react-google-maps/api';
import GuessMap from './GuessMap';

import { coordinates } from './Streetview';
//import { center } from './GuessMap';

const center = {
  lat: 0,
  lng: -180
};

const containerStyle = {
  width: '900px',
  height: '600px'
};

const PolyLineBetweenGuessAndCorrect = [
  { lat: center.lat, lng: center.lng},
  { lat: coordinates.lat, lng: coordinates.lng}
]

function calcCrow(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = toRad(lat2-lat1);
  const dLon = toRad(lon2-lon1);
  lat1 = toRad(lat1);
  lat2 = toRad(lat2);

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  return d;
}

function toRad(value) {
  return value * Math.PI / 180;
}

function calculateBonus(km) {
  const temp = Math.pow(((km + 100) / km) * 0.2, 6) * 4000;
  return  Math.round(temp > 1 ? 10000 : temp * 10000);
}

console.log(center);
console.log(coordinates);

let distance = calcCrow(center.lat, center.lng, coordinates.lat, coordinates.lng);
export let score = calculateBonus(distance);

export let round = 1;

function MyComponent({ locationSelected }) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA"
  })

  const mapOptions = {
    styleControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: false,
    fullscreenControl: false
  }

  const PolylineOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    zIndex: 1
  };

  console.log(GuessMap.selectedLocation);

  return isLoaded ? (
      <GoogleMap className="window-map"
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={3}
        //onClick={_handleMapClick}
        options={ mapOptions }
        clickableIcons={false}
      >
        <Marker 
          position={ coordinates }
          clickable={ false }
        />
        <Marker
          position={ center }
          clickable={ false }
        />
        {/* <Marker
          position={ selectedLocation }
          clickable={ false }
        />   */}
        <Polyline
          path={ PolyLineBetweenGuessAndCorrect }
          options={PolylineOptions}
        />
        <></>
      </GoogleMap>
      
  ) : <></>
}

export default React.memo(MyComponent);