import React, { Component } from 'react'
import { GoogleMap, useJsApiLoader, Marker, LoadScript } from '@react-google-maps/api';

import { coordinates } from './Streetview'

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
        center={coordinates}
        zoom={3}
        onClick={() => console.log('test')}
        options={ mapOptions }
        clickableIcons={false}
      >
        <Marker 
            position={ coordinates }
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