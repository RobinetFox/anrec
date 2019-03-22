//Trying with leaflet
var mymap = L.map('mapid').setView([48.5734053, 7.7521113], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoicm9iaW4tdHJvZXNjaCIsImEiOiJjam14aGFtdWIzaGw1M3BvZXdzN2E4OTd2In0.GEpXIj6HIbouU2_Bv29zTg'
}).addTo(mymap);
jQuery.get('http://strasmap.eu/remote.amf.json/TraficInfo.geometry',function(data){
var streetData = JSON.parse(data);
console.log(streetData);
});
