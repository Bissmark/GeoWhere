import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const center = {
  lat: 0,
  lng: -180
};

const containerStyle = {
  width: '400px',
  height: '200px',
};

//export let selectedLocation, setSelectedLocation;// = useState();

 export default function GuessMap({ updateMarkers, guessLocation }) {
    const [isSelected, setSelected] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState();

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA"
    })

    const _handleMapClick = (ev, lat, lng) => {
        // console.log(456,e)
        setSelected(true);
        setSelectedLocation(ev.latLng);
        updateMarkers(lat, lng);
    }

    const _handleGuessClick = () => {
        guessLocation();
    }

    const mapOptions = {
        styleControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl: false,
        clickableIcons: false
    }

    return isLoaded ? (
        <div className="guessLocation">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={1}
                onClick={(ev) => _handleMapClick(ev, ev.latLng.lat(), ev.latLng.lng())}
                options={ mapOptions }
            >
            <Marker 
                position={ selectedLocation }
                clickable={false}
            />
                <></>
            </GoogleMap>
            <button className="guessButton" onClick={() => _handleGuessClick()}>Guess</button>
        </div>
    ) : <></>
}
