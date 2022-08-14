import React, { Component } from 'react'
import { GoogleMap, useJsApiLoader, StreetViewPanorama, StreetViewPanoramaProps, LoadScript, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

// function getRandomInRange(from, to, fixed) {
//   return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
//   // .toFixed() returns string, so ' * 1' is a trick to convert to number
// }

// const center = {
//   lat:  -55.625414,
//   lng: -71.222303
// };

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

// const RandomLocation = (callback) => {
//   const lat = (Math.random() * 90) - 90;
//   const lng = (Math.random() * 180) - 180;

//   const sv = new window.google.maps.streetViewService();

//   sv.getPanorama({
//     location: StreetViewPanorama.LatLng(lat, lng),
//     radius: 50
//   }, callback);
// }

// const HandeleCallBack = (data, status) => {
//   if (status == 'OK') {

//   }
// }

const streetViewStart = {
  lat: getRandomInRange(-180, 180, 3),
  lng: getRandomInRange(-90, 90, 3)
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

// const MapElements = GoogleMap(props => (
//   <div>
//     <GoogleMap>
//       center={ props.center }
//     </GoogleMap>
//   </div>
// ))


// class Streetview extends Component {
//   constructor(props) {
//     super(props);

//     console.log(streetViewStart);
//     this.state = {
//       lat: this.props.lat,//getRandomInRange(-180, 180, 3),
//       lng: this.props.lng//getRandomInRange(-90, 90, 3)
//     }
//   }

//   render() {
//     //const { center, markers, zoom } = this.props.state;
//     //const googleMapsApiKey = 'AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA'
//     const panOptions = {
//       position: { 
//         lat: this.state.lat,
//         lng: this.state.lng
//       },
//       pov: {
//         heading: 20,
//         pitch: 2
//       },
//       visible: true
//     }
    
//     return <div style={{
//       width: '100%',
//       height: '100%',
//       backgroundColor: '#fff'
//     }}>
//       <LoadScript
//          id='google-map-script'
//          googleMapsApiKey="AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA"
//        >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//     //center={center}
//     //zoom={10}
//     //onLoad={onLoad}
//     // onUnmount={onUnmount}
//     >
//       {
//         this.state.lat ?
//          <StreetViewPanorama
//           //apiKey={ googleMapsApiKey }
//           StreetViewPanoramaProps={ panOptions }
//           //position={ streetViewStart }
//           //visible={true}
//         /> :
//         <div className='lmao'></div>
//       }
//       </GoogleMap>
//       </LoadScript>
//     </div>
// }
//   // componentWillReceiveProps(nextProps) {
//   //   this.setState(nextProps.place);
//   // }
// }

const places = [
  [{ lat: 60.171001,  lng: 24.939350 },  {country: 'Finland'}], // Helsinki, Finland
  [{ lat: 48.858093,  lng: 2.294694 },   {country: 'France'}], // Paris, France
  [{ lat: 51.510020,  lng: -0.134730 },  {country: 'Great Britain'}], // London, Great Britain
  [{ lat: 41.8902,    lng: 12.4922 },      {country: 'Italy'}], // Rome, Italy
  [{ lat: 25.195302,  lng: 55.272879 },  {country: 'United Arab Emirates'}], // Dubai, United Arab Emirates
  [{ lat: 1.283404,   lng: 103.863134 },  {country: 'Singapore'}], // Marina Bay, Singapore
  [{ lat: 29.976768,  lng: 31.135538 },  {country: 'Egypt'}], // Cairo, Egypt
  [{ lat: 40.757876,  lng: -73.985592 }, {country: 'United States'}], // New York, USA
];

let currentPlace = places[Math.floor(Math.random() * (places.length))];
let coordinates = currentPlace[0]; // Get coordinates
let country = currentPlace[1].country;



function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA"
  })

  const apiKey = "AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA";

  console.log(streetViewStart);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(streetViewStart);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    // <LoadScript 
    //     googleMapsApiKey="AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA"
    //    > 
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
        position={ coordinates }
        //center={ streetViewStart }
        visible={true}
        //onLoad={ onLoad }
    />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)

//export default Streetview;