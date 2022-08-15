import React, { Component } from 'react'
import { GoogleMap, useJsApiLoader, Marker, LoadScript } from '@react-google-maps/api';

import { coordinates } from './Streetview'
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

const center = {
  lat: 0,
  lng: -180
};

const containerStyle = {
  width: '400px',
  height: '200px'
};

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

const markerPosition = {
  lat: getRandomInRange(-28, -36, 1),
  lng: getRandomInRange(140, 150, 1)
};

function MyComponent() {
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

  return isLoaded ? (
      <GoogleMap className="window-map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={1}
        onClick={() => console.log('test')}
        options={ mapOptions }
        clickableIcons={false}
      >
        <Marker 
            position={ center }
        />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent);