import React, { Component } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export const center = {
  lat: 0,
  lng: -180
};

const containerStyle = {
  width: '400px',
  height: '200px',
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
    <div className="guessLocation">
      <GoogleMap
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
      </div>
  ) : <></>
}

export default React.memo(MyComponent);