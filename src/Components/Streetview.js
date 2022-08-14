import React from 'react'
import { GoogleMap, useJsApiLoader, StreetViewPanorama } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

// function getRandomInRange(from, to, fixed) {
//   return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
//   // .toFixed() returns string, so ' * 1' is a trick to convert to number
// }

const center = {
  lat:  -55.625414,
  lng: -71.222303
};

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

const RandomLocation = (callback) => {
  const lat = (Math.random() * 90) - 90;
  const lng = (Math.random() * 180) - 180;

  const sv = new window.google.maps.streetViewService();

  sv.getPanorama({
    location: StreetViewPanorama.LatLng(lat, lng),
    radius: 50
  }, callback);
}

const HandeleCallBack = (data, status) => {
  if (status == 'OK') {

  }
}

const streetViewStart = {
  lat: getRandomInRange(-180, 180, 6),
  lng: getRandomInRange(-90, 90, 6)
};

// const onLoad = (streetViewService) => {
//   streetViewService.getPanorama({
//     location: streetViewStart, 
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

  const apiKey = "AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA";

  console.log(streetViewStart);

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(streetViewStart);
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        //center={center}
        //zoom={10}
        //onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        <StreetViewPanorama className="window-streetview"
        //apiKey={apiKey}
        zoom={3}
        position={ streetViewStart }
        visible={true}
        //onLoad={ onLoad }
    />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)