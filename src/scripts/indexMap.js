let map = L.map('index-map').setView([-31.42658, -64.18461], 14)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

L.marker([-31.42658, -64.18461]).addTo(map).bindPopup("Bakery").openPopup()
