import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/map.css";
import Header from "../components/header.js";

// Gambar destinasi
import surabayaZooImage from "../assets/surabaya_zoo.jpg";
import kenjeranImage from "../assets/kenjeran.jpg";

// Marker Leaflet Biru
import iconUrl from "../assets/marker-icon-blue.png";
import iconRetinaUrl from "../assets/marker-icon-2x-blue.png";
import shadowUrl from "../assets/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const wisataList = [
  {
    id: 1,
    nama: "Surabaya Zoo",
    posisi: [-7.2870, 112.7368],
    deskripsi: "Kebun binatang tertua di Indonesia.",
    image: surabayaZooImage,
    tiket: "Rp 15.000,00",
    jamBuka: "08.00 - 16.00",
    fasilitas: ["Toilet", "Parkir", "Kantin", "Mushola", "Ramah Disabilitas"],
  },
  {
    id: 2,
    nama: "Kenjeran Park",
    posisi: [-7.2234, 112.7893],
    deskripsi: "Wisata terpadu dengan pantai dan taman hiburan.",
    image: kenjeranImage,
    tiket: "Rp 10.000,00",
    jamBuka: "08.00 - 18.00",
    fasilitas: ["Area Bermain", "Toilet", "Parkir", "Food Court"],
  },
];

export default function InteractiveWisataMap() {
  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <Header />
      <MapContainer
        center={[-7.2756, 112.6426]}
        zoom={12}
        style={{ height: "calc(100vh - 60px)", width: "100%", marginTop: 60 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {wisataList.map((w) => (
          <Marker key={w.id} position={w.posisi} icon={customIcon}>
            <Popup>
              <div className="popup-card">
                <img src={w.image} alt={w.nama} />
                <div className="popup-card-content">
                  <h3>{w.nama}</h3>
                  <p>{w.deskripsi}</p>
                  <p><strong>Jam:</strong> {w.jamBuka}</p>
                  <p><strong>Tiket:</strong> {w.tiket}</p>
                  <p><strong>Fasilitas:</strong> {w.fasilitas.join(", ")}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
