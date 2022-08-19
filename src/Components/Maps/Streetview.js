import React from 'react'
import { GoogleMap, useJsApiLoader, StreetViewPanorama } from '@react-google-maps/api';
import Timer from '../UIGame/Timer';
import { locationCoordinates } from '../../Utils/Locations';

// Size of streetview window
const containerStyle = {
  width: '1000px',
  height: '600px'
};
export let coordinates = locationCoordinates; // Get coordinates

function MyComponent({ locationNumber }) {
  // gets google api key
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA"
  })

  // visual options for Streetview
  const panoOptions = {
    pov: {
      heading: 20,
      pitch: 2,
    },
    disableDefaultUI: true,
    visible: true
  }

  // Show Streetview inside a good map, show timer on streetview page
  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        addressControl={false}
      >
        <StreetViewPanorama
        position={ locationCoordinates[locationNumber][0] }
        options={panoOptions}
      />
      </GoogleMap>
        <div className="timer">
          <Timer />
        </div>
   </div>
  ) : <></>
}

export default React.memo(MyComponent);