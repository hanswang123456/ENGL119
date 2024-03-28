import { ReactDOM, useRef, useState, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";

export default function SimpleMap(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  //const tokyo = { lng: 139.753, lat: 35.6844 };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = import.meta.env.API;

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [props.props[0].long, props.props[0].lat],
      zoom: zoom,
    });

    for (let marker of props.props) {
      new maptilersdk.Marker({ color: "#FF0000" })
        .setLngLat([marker.long, marker.lat])
        .addTo(map.current);
    }
  }, [zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
