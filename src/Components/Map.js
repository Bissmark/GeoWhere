import React, { Component } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import StreetviewRandom from './Streetview';

const center = {
  lat: 0,
  lng: -180
};

// const MapElem = (
//     <div>
//         <GoogleMap
//             //onClick={  }
//             center={ center }
//             zoom={ 1 }
//         >
//         {
//             // props.markers.map((marker, index) => {
//             //     return <Marker 
//             //     key={ index }
//             //     postion={ marker }
//             //     title={`[${ marker.lat.toFixed(2)}-ish, ${ marker.lng.toFixed(2)}-ish]`}
//             //     />
//             // })
//         }
//         </GoogleMap>
//     </div>
// );

const containerStyle = {
  width: '800px',
  height: '400px'
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

  //const [map, setMap] = React.useState(null)

  return isLoaded ? (
      <GoogleMap className="window-map"
        mapContainerStyle={containerStyle}
        center={markerPosition}
        zoom={5}
        //onClick={ console.log('clicked')}
      >
        <Marker 
            //onLoad={ onLoad }
            position={ markerPosition }
        />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

// class Map extends Component {
//     constructor(props) {
//         super(props)

//         this._handeMapClick = this._handeMapClick.bind(this);
//         this._handleMapMounted = this._handleMapMounted.bind(this);
//     }

//     _handleMapMounted(map) {
//         this._map = map;
//     }

//     _handeMapClick(event) {
//         const latLng = event.latLng.toJSON();
//         const nextState = this.props.state;

//         nextState.markers = [];
//         nextState.markers.push(latLng);
//         console.log(nextState);

//         this.props.pinMarkerOnClick(nextState);
//     }


//     render() {
//         const { center, markers, zoom } = this.props.state;

//     return (
//         <MapElem
//             containerElement={
//                 <div style={{ height: `300px`, width: `100%` }} />
//             }
//             mapElement={
//                 <div style={{ height: `100%` }} />
//             }
//             onMapMounted={ this._handleMapMounted }
//             onMapClick={ this._handeMapClick }
//             center={ center }
//             markers={ markers }
//             zoom={ zoom }
//             />
//         );
//     }
// }

// export default Map;

export default React.memo(MyComponent)