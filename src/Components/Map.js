import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '800px',
  height: '400px'
};

const center = {
  lat: 0,
  lng: -180
};

const markerPosition = {
    lat: 37.772,
    lng: -122.214
}

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA"
  })

  const [map, setMap] = React.useState(null)

  return isLoaded ? (
      <GoogleMap className="window-map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={1}
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

export default React.memo(MyComponent)