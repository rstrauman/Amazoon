'use strict';

const submit = document.getElementById('submit');

mapboxgl.accessToken = "pk.eyJ1IjoicnN0cmF1bWFuIiwiYSI6ImNtaXF2czYxczBwcG0zZm9lNXQ3bHB3ZXkifQ.0rmmDZDQiDNXTAOIwOc3AA";

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    center: [0, 0],
    zoom: 17,
    pitch: 40
});

const marker = new mapboxgl.Marker({color: '#ff7342'});

function getLocation(position){
    let { longitude, latitude } = position.coords;
    map.setCenter([longitude, latitude]);
    marker.setLngLat([longitude, latitude]).addTo(map);
}

function errorHandler(){
    console.log('Unable to Retrieve location!');
}

const options = {
    enableHighAccuracy: true
}

function disableMapControls(){
    map.touchZoomRotate.disable();
    map.keyboard.disable();
}

function displayPosition(){
    if('geolocation' in navigator){
        marker.remove();
        navigator.geolocation.getCurrentPosition(getLocation, errorHandler, options);
        disableMapControls();
    } else {
        console.log('Geolocation is not supported by Browser');
    }
}

displayPosition();

submit.addEventListener('click', displayPosition);