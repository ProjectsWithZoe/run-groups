import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

function MapComponent() {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicHJvamVjdHN3aXRoem9lIiwiYSI6ImNtOTN6djZpcjBrOG0yanF2bXhxNHZocTIifQ.tfm3YkOdWnOgLqbtx8qBGw";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }, []);

  return <div className="flex justify-content-center"><div id="map" style={{ width: "90vw", height: "20vh", justify:"center " }}></div></div>;
}

export default MapComponent;
