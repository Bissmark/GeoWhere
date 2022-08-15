import React, { Component } from 'react'
import { GoogleMap, useJsApiLoader, StreetViewPanorama } from '@react-google-maps/api';

const containerStyle = {
  width: '1000px',
  height: '600px'
};

const center = {
  lat: 0,
  lng: -180
};

const places = [
  [{ lat: 36.385822,  lng: 127.496827 },  {country: 'South Korea'}], // works
  [{ lat: 29.9756934,  lng: 31.1385296 },   {country: 'Eqypt'}], // works 
  [{ lat: -22.9520502,  lng: -43.2113599 },  {country: 'Brazil'}], // works 
  [{ lat: 13.74732370422358,    lng: 100.49613033270501 }, {country: 'Thailand'}], // works 
  [{ lat: 27.171020847054738,  lng: 78.04266535845639 },  {country: 'India'}], // works 
  [{ lat: -37.811844398680314,   lng: 144.96759668243945 },  {country: 'Australia'}], // works 
  [{ lat: 6.252079237587264,  lng: -75.56833320924022 },  {country: 'Columbia'}], // works 
  [{ lat: 40.81032909670101,  lng: -73.94745172480059 }, {country: 'USA'}], // works 
  [{ lat: 46.838152,  lng: -71.194416 }, {country: 'Canada'}], // works
  [{ lat: 64.164175,  lng: -22.021422 }, {country: 'Iceland'}], // works
  [{ lat: 38.755671,  lng: -9.225757 }, {country: 'Portugal'}], // works
  [{ lat: 12.271734,  lng: 109.206220 }, {country: 'Vietnam'}], // works
  [{ lat: 37.97343569109015,  lng: 23.733796666485915 },{country: 'Greece'}], //works
  [{lat: 43.76052289282223,  lng: 11.24199102419296},{country: 'Italy'}], //works
  [{lat: 41.404481012777566,  lng: 2.176676488240237},{country: 'Spain'}], //works
  [{lat: 52.372878816222396,  lng: 4.9124644387707725},{country: 'Netherlands'}], //works
  [{lat: 51.49749474185877,  lng: -0.13558904642666572},{country: 'England'}], //works
  [{lat: 19.424745695980704,  lng: -99.18494693513716},{country: 'Mexico'}], //works
  [{lat: 22.284666251565774,  lng: 114.173810488489},{country: 'Hong Kong'}], //works
  [{lat: 34.990320880962635,  lng: 135.76626977212106},{country: 'Japan'}], //works
  [{lat: -33.853115340616796,  lng: 151.24589801725926},{country: 'Australia'}], //works
  [{lat: -41.290643779749175,  lng: 174.78591007159525},{country: 'New Zealand'}], //works
  [{lat: -13.192125313733207,  lng: -72.53656374213867},{country: 'Peru'}], //works
  [{lat: 48.859308904098754,  lng: 2.305188678188841},{country: 'France'}], //works
  [{lat: 25.195660959887228,  lng: 55.27315819300908},{country: 'Dubai'}], //works

];


let currentPlace = places[Math.floor(Math.random() * (places.length))];
export let coordinates = currentPlace[0]; // Get coordinates
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

//export default coordinates

//export default Streetview;