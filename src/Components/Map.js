import React from "react";
import { GoogleMap, useJsApiLoader, Marker, Polyline } from "@react-google-maps/api";
import { coordinates } from "./Streetview";

const containerStyle = {
  width: "1200px",
  height: "600px",
};

function MyComponent({ markerValue, locationNumber }) {

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCciF-YDKAm5YDHP2qJLlKJb0gZPtvSYTA",
  });

  let coordinateStreetView = coordinates[locationNumber][0]

  const mapOptions = {
    disableDefaultUI: true,
  };

  const PolylineOptions = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    zIndex: 1,
  };

  let clickedMarkerValues = {lat: markerValue[0], lng: markerValue[1]}

  const PolyLineBetweenGuessAndCorrect = [
    { lat: clickedMarkerValues.lat, lng: clickedMarkerValues.lng },
    { lat: coordinateStreetView.lat, lng: coordinateStreetView.lng },
  ];

  return isLoaded ? (
    <div>
      <GoogleMap
        className="window-map"
        mapContainerStyle={containerStyle}
        center={coordinateStreetView}
        zoom={2}
        options={mapOptions}
        clickableIcons={false}
      >
        {clickedMarkerValues.lat ? <Marker position={coordinateStreetView} clickable={false} /> : null }
        {clickedMarkerValues.lat ?  <Marker position={clickedMarkerValues} clickable={false} /> : null}
        {clickedMarkerValues.lat ? <Polyline path={PolyLineBetweenGuessAndCorrect} options={PolylineOptions} /> : null}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);