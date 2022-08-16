import React, { Component } from 'react'
import { GoogleMap, useJsApiLoader, Marker, Polyline } from '@react-google-maps/api';

import { coordinates } from './Streetview';
import { center } from './GuessMap';

// const center = {
//   lat: 0,
//   lng: -180
// };

const containerStyle = {
  width: '400px',
  height: '200px'
};

const PolyLineBetweenGuessAndCorrect = [
  { lat: center.lat, lng: center.lng},
  { lat: coordinates.lat, lng: coordinates.lng}
]

function getDistance(latGuess, lngGuess, latCorrect, lngCorrect, unit) {
  if((latGuess == latCorrect) && (lngGuess == lngCorrect)) {
    return 0;
  } else {
    let radLatGuess = Math.PI * latGuess / 180;
    let radLatCorrect = Math.PI * latCorrect / 180;
    let theta = lngGuess - lngCorrect;
    let radTheta = Math.PI * theta / 180;
    let dist = Math.sin(radLatGuess) * Math.sin(radLatCorrect) + Math.cos(radLatGuess) * Math.cos(radLatCorrect) * Math.cos(radTheta);

    if(dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") { dist = dist * 1.609344 }
    if (unit == "N") { dist = dist * 0.8684 }
    return (dist / 1.609).toFixed(1);
  }
}

async function calculateScore() {
  let distance = getDistance(center.lat, center.lng, coordinates.lat, coordinates.lng, 'K');

  if((distance === 0) || (distance <= 1)) {
    console.log('Congrats you got a perfect score, 5000 points!');
  } else if ((distance > 1) && (distance <= 5000)) {
    console.log(`You were so close, ${ (1 / distance) * 50000 } points`);
  } else if ((distance > 5001)) {
    console.log('Better luck next time, 0 points');
  } else {
    console.log('distance is NaN!');
  }
}

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

  calculateScore();

  //console.log(getDistance(center.lat, center.lng, coordinates.lat, coordinates.lng, 'K'));

  return isLoaded ? (
      <GoogleMap className="window-map"
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={3}
        onClick={() => console.log('test')}
        options={ mapOptions }
        clickableIcons={false}
      >
        <Marker 
          position={ coordinates }
        />
        <Marker
          position={ center }
        />
        <Polyline
          path={ PolyLineBetweenGuessAndCorrect }
          options={PolylineOptions}
        />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

// class Map extends Component {
//   render() {
//     return (
//       <LoadScript
//         googleMapsApiKey="AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA"
//       >
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={markerPosition}
//           zoom={5}
//         >
//         <Marker 
//           position={ markerPosition }
//         >
//           <></>
//           </Marker>
//         </GoogleMap>
//       </LoadScript>
//     )
//   }
// }

// class Map extends Component {
//   render() {
//       return <div style={{
//               width: '100%',
//               height: '100%',
//               backgroundColor: '#fff'
//             }}>
//               <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//               //zoom={5}
//               //onLoad={onLoad}
//               // onUnmount={onUnmount}
//             >
              
//             </GoogleMap>
//         </div>
//   }
// }

//export default Map;

export default React.memo(MyComponent)

// import React, { Component } from 'react';
// import { GoogleMap, useGoogleMap, Marker } from "@react-google-maps/api";

// const MapElem = useGoogleMap(props => (
//   <div>
//     <GoogleMap
//       onClick={props.onMapClick}
//       ref={props.onMapMounted}
//       center={props.center}
//       zoom={props.zoom}
//       defaultOptions={{
//         streetViewControl: false,
//         maxZoom: 10,
//         gestureHandling: 'none'
//       }}
//     >
//       {
//         props.markers.map((marker, idx) => {
//           return <Marker
//             key={idx}
//             position={marker}
//             // icon="https://campus-map.stanford.edu/images/new/cm-target.png"
//             title={`[${marker.lat.toFixed(2)}-ish, ${marker.lng.toFixed(2)}-ish]`}
//           />
//         })
//       }
//     </GoogleMap>
//   </div>
// ));

// class Map extends Component {
//   constructor(props) {
//     super(props);

//     this.handleMapClick = this.handleMapClick.bind(this);
//     this.handleMapMounted = this.handleMapMounted.bind(this);
//   }

//   handleMapMounted(map) {
//     // ??????
//     this._map = map;
//   }

//   handleMapClick(event) {
//     const latLng = event.latLng.toJSON();
//     const nextState = this.props.state;

//     nextState.markers = [];
//     nextState.markers.push(latLng)
//     console.log(nextState);

//     this.props.pinMarkerOnClick(nextState);
//   }

//   render() {
//     const { center, markers, zoom } = this.props.state;

//     return (
//       <MapElem
//         containerElement={
//           <div style={{ height: `300px`, width: `100%` }} />
//         }
//         mapElement={
//           <div style={{ height: `100%` }} />
//         }
//         onMapMounted={this.handleMapMounted}
//         onMapClick={this.handleMapClick}
//         center={center}
//         markers={markers}
//         zoom={zoom}
//       />
//     );
//   }
// }

//export default Map;