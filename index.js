

function initMap(Lat, Lon) {
    const iss = { lat: Lat, lng: Lon };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: iss,
        mapTypeId: "satellite",
    });

    const marker = new google.maps.Marker({
        position: iss,
        map: map,
        title: "ISS",
        label: "ISS", 
    });

    
  }

window.initMap = initMap;

window.addEventListener('DOMContentLoaded', () => {
    initMap(0.0, 0.0)
})