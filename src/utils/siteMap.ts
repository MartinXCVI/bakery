import L, { Map as LeafletMap, TileLayer, Marker } from "leaflet"
import "leaflet/dist/leaflet.css"


document.addEventListener("DOMContentLoaded", ()=> {

  const mapElement = document.getElementById("index-map")
  if(!mapElement) {
    console.error("Map container not found.")
    return;
  }

  const map: LeafletMap = L.map("index-map").setView([-31.42658, -64.18461], 14)

  const tileLayer: TileLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  })

  tileLayer.addTo(map)

  const marker: Marker = L.marker([-31.42658, -64.18461])
    .addTo(map)
    .bindPopup("Bakery")
    .openPopup()
})