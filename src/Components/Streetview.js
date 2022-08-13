import React from 'react'
import { GoogleMap, useJsApiLoader, StreetViewPanorama } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

const center = {
  lat: 37.869085,
  lng: -122.254775
};

// const center = {
//   lat: getRandomInRange(-28, -36, 1),
//   lng: getRandomInRange(140, 150, 1)
// };

// const onLoad = (streetViewService) => {
//   streetViewService.getPanorama({
//     location: center, 
//     radius: 50
//   }, (data, status) => console.log(
//     "StreetViewService results",
//     { data, status }
//   ))
// };

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA"
  })

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center + console.log(center)}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <StreetViewPanorama className="window-streetview"
      position={center}
      visible={true}
    />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)