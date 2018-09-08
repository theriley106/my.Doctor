//Part 1: Getting map setup
var platform = new H.service.Platform({
   app_id: 'Jujo8ybVlqbfcm4jKhgb',
   app_code: '0WvWO6Gn60_9a1qeLvwNAg',
   useCIT: false,
   useHTTPS: true
});

var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'), defaultLayers.normal.map, {
   zoom: 18,
   center: new H.geo.Point(39.2967,-76.5927)
});

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');


var venueService = platform.getVenueService();
var customVenueLayer = venueService.createTileLayer();
var venueProvider = customVenueLayer.getProvider();
map.addLayer(customVenueLayer);
venueProvider.setCurrentLevel(2)

//Part 3: Changing floors
function renderControls(title, buttons) {
   var containerNode = document.createElement('div');
   containerNode.id = 'containerNode'
   containerNode.innerHTML = '<h4 id="title"> Level: ' + venueProvider.getCurrentLevel() + '</h4><div class="btn-group"></div>';

   Object.keys(buttons).forEach(function(label) {
      var input = document.createElement('input');
      input.value = label;
      input.type = 'button';
      input.onclick = buttons[label];
      input.className = 'btn btn-sm btn-default';
      containerNode.lastChild.appendChild(input);
   });

   document.getElementById('map').appendChild(containerNode);
}

function randomLongLat(){
  one = [39.2966,-76.5927]
  two = [39.2964,-76.5927]
  three = [39.2966,-76.5923]
  four = [39.2966,-76.5918]
  five = [39.2976,-76.5918]
  six = [39.2980,-76.5928]
  items = [one, two, three, four, five, six]
  return items[Math.floor(Math.random()*items.length)]
}

function addMarker(room){
    var c = window.randomLongLat();
      var svgMarkup = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="#1b468d" x="1" y="1" width="28" ' +
        'height="28" /><text x="12" y="18" font-size="8pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="white">' + room + '</text></svg>';
      var icon = new window.H.map.Icon(svgMarkup),
        coords = {lat: c[0], lng: c[1]},
        marker = new window.H.map.Marker(coords, {icon: icon});

      // Add the marker to the map and center the map at the location of the marker:
      window.map.addObject(marker);
      window.map.setCenter(coords);
      console.log('done');
    }
