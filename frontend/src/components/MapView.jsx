import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";
import places from "../data/places";

// Konfigurasi ikon Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png"
});

const MapView = () => {
  return (
    <MapContainer center={[-7.28, 112.74]} zoom={13} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place) => (
        <Marker key={place.id} position={[place.lat, place.lng]}>
          <Popup>
            <strong>{place.name}</strong><br />
            <img src={place.image} alt={place.name} className="popup-image" /><br />
            <em>{place.category}</em><br />
            {place.description}<br />
            Aksesibilitas: {place.accessible ? "✅ Ramah disabilitas" : "❌ Tidak ramah"}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
