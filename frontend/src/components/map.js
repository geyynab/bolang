import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Header from "../components/header.js";

// Fix icon marker Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const destinasi = [
  {
    id: 1,
    nama: "Pantai Bolang",
    posisi: [-6.9147, 107.6098],
    deskripsi: "Pantai yang indah dengan pasir putih.",
  },
  {
    id: 2,
    nama: "Gunung Bolang",
    posisi: [-6.917, 107.62],
    deskripsi: "Gunung dengan pemandangan keren banget.",
  },
];

export default function WisataMap() {
  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <Header />
      <MapContainer
        center={[-6.9147, 107.6098]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {destinasi.map((d) => (
          <Marker key={d.id} position={d.posisi}>
            <Popup>
              <strong>{d.nama}</strong>
              <br />
              {d.deskripsi}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
