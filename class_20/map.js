/** Google maps example **/
var map;

function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
        center: {lat: 28.6970659, lng: 77.1433033},
        zoom: 16
    });

    map.addListener("center_changed", function () {
        var loc_data = "CENTER:  Lat: " + map.getCenter().lat() + " | Lng: " + map.getCenter().lng();
        console.log(loc_data);
        document.getElementById("center_data").innerHTML = loc_data;
    });

    map.addListener("click", function (event) {
        //console.log(event);
        var loc_data = "LOCATION:  Lat: " + event.latLng.lat() + " | Lng: " + event.latLng.lng();
        //console.log("Click on map event triggered");
        document.getElementById("click_data").innerHTML = loc_data;
    });
}

//document.getElementById();