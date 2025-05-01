import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

function MapComponent() {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicHJvamVjdHN3aXRoem9lIiwiYSI6ImNtOTN6djZpcjBrOG0yanF2bXhxNHZocTIifQ.tfm3YkOdWnOgLqbtx8qBGw";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [51.5, 0.12], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        //showUserHeading: true
    }));
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div 
        id="map" 
        className="rounded-lg overflow-hidden shadow-md"
        style={{ 
          width: "90vw", 
          height: "20vh",
        }}
      />
    </div>
  );
}

export default MapComponent;
