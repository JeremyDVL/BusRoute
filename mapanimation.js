
const busStops = [
  [-75.96960, 42.08936],//suny binghamton
  [-75.97331, 42.08877],//bus stop
  [-75.97344, 42.09096],//bus stop
  [-75.97451, 42.09178],//bus stop
  [-75.97537, 42.09445],//bus stop
  [-75.97535, 42.09544],//Denny's
  [-75.97391, 42.09576],//on Ramp
  [-75.97176, 42.09483],//on Ramp
  [-75.97108, 42.10012],//201
  [-75.96816, 42.10585],//201
  [-75.96842, 42.11566],//201
  [-75.96945, 42.12018],//201
  [-75.97202, 42.12457],//Harry L Drive
  [-75.97507, 42.12473],//Wegmans
  [-75.97352, 42.12333],//Wegmans
  [-75.97507, 42.12473],//Wegmans
  [-75.97520, 42.12953],//Oakdale Mall
];

mapboxgl.accessToken =
  'pk.eyJ1IjoiamRvZzE5NzYiLCJhIjoiY2xhZTJ2djBtMHFjbDNxczM1ZjN4bjF2YiJ9.estk1JhwWbY_EGOwQnbV9A';

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/navigation-day-v1',
  center: [-75.96960, 42.08936],
  zoom: 0,
});

let marker = new mapboxgl.Marker({
  color: '#FFA500',
  size: 'large',
  scale: 1.25, 
}).setLngLat([-75.96960, 42.08936]).addTo(map);

function createMarker() {
  for (var i=0; i < busStops.length; i++) {
const marker1 = new mapboxgl.Marker({
    color: '#DC143C',
    draggable: false
    }).setLngLat(busStops[i]).addTo(map)};
  }

let counter = 0;
function move() {

  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    map.flyTo({center: busStops[counter]});
    counter++;
    move();
  }, 1000);
}

function moveClose() {
  map.flyTo({zoom:15, center: [-75.96960, 42.08936]});
}

setTimeout(moveClose, 3000);
setTimeout(createMarker, 8000);

if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, busStops };
}
