const map = L.map("map");
let marker = null;

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const setMap = (latitude, longitude) => {
  map.setView([latitude, longitude], 17);
}

const setMarker = (latitude, longitude) => {
  if (!marker) {
    marker = L.marker([latitude, longitude]).addTo(map);
    return;
  }
  marker.setLatLng([latitude, longitude]);
}

const success = (pos) => {
  setMap(pos.coords.latitude, pos.coords.longitude);
  setMarker(pos.coords.latitude, pos.coords.longitude);
}

const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

setInterval(() => {
  navigator.geolocation.getCurrentPosition(success, error, options);
}, 5000);