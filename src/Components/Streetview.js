import React, { Component } from 'react'
import { GoogleMap, useJsApiLoader, StreetViewPanorama } from '@react-google-maps/api';

const containerStyle = {
  width: '1000px',
  height: '600px'
};

const places = [
  [{ lat: 36.385822,  lng: 127.496827 },  {country: 'South Korea'}], // works
  //[{ lat: 15.075355459598848,  lng: 33.36925104232831 },   {country: 'Sudan'}], // doesnt work
  //[{ lat: -22.598826,  lng: -43.238300 },  {country: 'Brazil'}], // doesnt work
  //[{ lat: 51.130823,    lng: 71.419196 }, {country: 'Kazahstan'}], // works
  //[{ lat: 23.731066,  lng: 89.760435 },  {country: 'Bangladesh'}], // doesnt work
  //[{ lat: -32.202210,   lng: 116.302426 },  {country: 'Australia'}], // doesnt work
  //[{ lat: 17.1456591,  lng: -62.5502343 },  {country: 'Caribbean'}], // doesnt work
  //[{ lat: 39.050742,  lng: -111.584244 }, {country: 'USA'}], // doesnt works
  //[{ lat: 46.838152,  lng: -71.194416 }, {country: 'Canada'}], // works
  //[{ lat: 64.164175,  lng: -22.021422 }, {country: 'Iceland'}], // works
  //[{ lat: 38.755671,  lng: -9.225757 }, {country: 'Portugal'}], // works
  //[{ lat: 12.271734,  lng: 109.206220 }, {country: 'Vietnam'}], // works

];

// 36.38582280878182, 127.49682755641739 Daejeon, South Korea
// 15.025936608967287, 33.384805043308326 Tamboul, Sudan
// -22.598826852277597, -43.23830071819701 Rio, Brazil
// 51.13082338793742, 71.41919672293402 Nur-Sultan, Kazakstan
// 23.73106673377317, 89.76043547689221 Goalanda, Bangladesh
// -32.202210152108115, 116.30242628687364 Jarradale State Forest, Western Australia
// 17.15327060875382, -62.590951818742575 Nevis Peak, Caribbean Islands
// 12.271734907996098, 109.20622031341209 Nha Trang, Vietnam
// 39.05074274611721, -111.58424416166466 Mary's Nipple, Utah, USA
// 46.83815293828832, -71.19441606137913 Quebec City, Canada
// 64.16417583585351, -22.02142239761667 Reykjavik, Iceland
// 38.75567191119491, -9.225757596536551 Amadora, Lisbon, Portugal

let currentPlace = places[Math.floor(Math.random() * (places.length))];
let coordinates = currentPlace[0]; // Get coordinates
let country = currentPlace[1].country;

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA"
  })

  const panoOptions = {
    pov: {
      heading: 20,
      pitch: 2,
    },
    addressControl: false,
    linksControl: false,
    showRoadLabels: false,
    fullscreenControl: false,
    visible: true
  }

  console.log(coordinates);

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        //center={center}
        //zoom={10}
        //onLoad={onLoad}
        // onUnmount={onUnmount}
        //onClick={ }
        addressControl={false}
      >
        <StreetViewPanorama
        //apiKey={apiKey}
        //zoom={3}
        position={ coordinates }
        options={panoOptions}
        //onLoad={ onLoad }
    />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)

//export default Streetview;