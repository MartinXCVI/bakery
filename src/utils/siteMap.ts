import L, { Map as LeafletMap, TileLayer, Marker } from "leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";

const markerIcon: string = "/icons/marker-icon.png"
const markerShadow: string = "/icons/marker-shadow.png"

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

  const customIcon = new Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

  const marker: Marker = L.marker([-31.42658, -64.18461], { icon: customIcon })
    .addTo(map)
    .bindPopup("Bakery")
    .openPopup()
})