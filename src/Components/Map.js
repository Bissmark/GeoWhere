import React, { Component } from 'react'
import { GoogleMap, useJsApiLoader, Marker, Polyline } from '@react-google-maps/api';

import { coordinates } from './Streetview';
import { center } from './GuessMap';

// const center = {
//   lat: 0,
//   lng: -180
// };

const containerStyle = {
  width: '900px',
  height: '600px'
};

const PolyLineBetweenGuessAndCorrect = [
  { lat: center.lat, lng: center.lng},
  { lat: coordinates.lat, lng: coordinates.lng}
]

// const midPointPolyLine = [
//   { lat: (center.lat + coordinates.lat) / 2, lng: (center.lng + coordinates.lng) / 2}
// ]

// const midpoint = (p1, p2) => [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];

function midpoint(x1, y1, x2, y2) {
	return [(x1 + x2) / 2, (y1 + y2) / 2];
}

// console.log(center);
// console.log(coordinates);

// // midpointPoly.reduce();
// // console.log(midpointPoly);

// const zoomCentre = {
//   lat: (center.lat / 2) + (coordinates.lat / 2), lng: (center.lng / 2) + (coordinates.lng / 2)
// };

// console.log(zoomCentre);

// function getDistance(latGuess, lngGuess, latCorrect, lngCorrect, unit) {
//   if((latGuess == latCorrect) && (lngGuess == lngCorrect)) {
//     return 0;
//   } else {
//     let radLatGuess = Math.PI * latGuess / 180;
//     let radLatCorrect = Math.PI * latCorrect / 180;
//     let theta = lngGuess - lngCorrect;
//     let radTheta = Math.PI * theta / 180;
//     let dist = Math.sin(radLatGuess) * Math.sin(radLatCorrect) + Math.cos(radLatGuess) * Math.cos(radLatCorrect) * Math.cos(radTheta);

//     if(dist > 1) {
//       dist = 1;
//     }
//     dist = Math.acos(dist);
//     dist = dist * 180 / Math.PI;
//     dist = dist * 60 * 1.1515;
//     if (unit == "K") { dist = dist * 1.609344 }
//     if (unit == "N") { dist = dist * 0.8684 }
//     return (dist / 1.609).toFixed(1);
//   }
// }

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

// async function calculateScore() {
//   let distance = calcCrow(center.lat, center.lng, coordinates.lat, coordinates.lng);

//   let score = calculateBonus(distance);
//   console.log(score);

//   if((distance === 0) || (distance <= 1)) {
//     console.log('Congrats you got a perfect score, 5000 points!');
//   } else if ((distance > 1) && (distance <= 5000)) {
//     console.log(`You were so close, ${ (1 / distance) * 50000 } points`);
//   } else if ((distance > 5001)) {
//     console.log('Better luck next time, 0 points');
//   } else {
//     console.log('distance is NaN!');
//   }
// }
let distance = calcCrow(center.lat, center.lng, coordinates.lat, coordinates.lng);
export let score = calculateBonus(distance);

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

  //calculateScore();

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
        {/* <Marker
          position={ zoomCentre }
        />   */}
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