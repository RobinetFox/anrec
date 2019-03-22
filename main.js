//Trying with leaflet
var mymap = L.map('mapid').setView([48.5734053, 7.7521113], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoicm9iaW4tdHJvZXNjaCIsImEiOiJjam14aGFtdWIzaGw1M3BvZXdzN2E4OTd2In0.GEpXIj6HIbouU2_Bv29zTg'
}).addTo(mymap);
$.getJSON('TraficInfogeometry.json', function(data) {
  $.getJSON('TraficInfostatus.json', function(dataTraffic) {
  for (var i = 0; i < data["d"].length; i++) {
    pointList = [];
    for (var j = 0; j < data["d"][i]["go"].length; j++) {

      pointList.push([data["d"][i]["go"][j]['y'], data["d"][i]["go"][j]['x']]);
    }
    var firstpolyline = new L.Polyline(pointList, {
      color: searchId(i,dataTraffic),
      weight: 3,
      opacity: 1,
      smoothFactor: 1
    });
    console.log(searchId(i,dataTraffic));
    firstpolyline.bindPopup("Axe n°"+i+"</br> Actuellement : "+Math.floor(Math.random()*100)+" véhicules");
    firstpolyline.addTo(mymap);
  }
});
});
function searchId(id,data){
  for (var i=0;i<data["d"].length;i++){
    if (data["d"][i]["id"]===id.toString()){
      console.log(data["d"][i]["lc"]);
      switch (data["d"][i]["lc"]) {
        case "0x00CC33":
          return "green";
          break;
        case "0x00CC33":
            return "green";
            break;
        case "0xFFFF00":
              return "yellow";
              break;
        case "0xBF0000":
          return "red";
          break;

      }
    }
  }
}
