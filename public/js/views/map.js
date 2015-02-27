var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.MapView = Backbone.View.extend({
    el: '#map-view',

	// events: {},

    // var geojsonLayer = new L.GeoJSON.AJAX("http://localhost:4567/api/v1/operators.json?identifier=BART", {onEachFeature:popUp});

    // faked API endpoint for stops in a bounding box: http://localhost:4567/api/v1/stops.json?bbox=-122.39893913269043,37.76651662158726,-122.38070011138915,37.77178331201861


    initialize: function () {
        console.log("mapview initialized");
        this.map = null;
        // this.render();
    },
    
    render: function() {
        this.map = L.map('map-view').setView([37.749, -122.443], 7);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {maxZoom: 18})
            .addTo(this.map);
        return this;
    },

    add_stop: function(stop) {
        var s = {'type': 'Feature', 'geometry':stop.attributes.geometry};
        console.log(s);
        L.geoJson(s).addTo(this.map);
    },

    // function popUp(feature, layer) {
    //     layer.bindPopup(JSON.stringify(feature));
    // },

    // geojsonLayer.on('data:loaded',function(e){
    //     geojsonLayer.addTo(map);
    //     map.fitBounds(geojsonLayer.getBounds());
    // });
     
 
   
});



