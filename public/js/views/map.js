var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.MapView = Backbone.View.extend({
    el: '#map-view',

	// events: {},

    // var geojsonLayer = new L.GeoJSON.AJAX("http://localhost:4567/api/v1/operators.json?identifier=BART", {onEachFeature:popUp});


    initialize: function () {
        console.log("mapview initialized");
        // this.render();
    },
    
    render: function() {
        var map = L.map('map-view').setView([37.749, -122.443], 7);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(map);
        return this;
    },

    // function popUp(feature, layer) {
    //     layer.bindPopup(JSON.stringify(feature));
    // },

    // geojsonLayer.on('data:loaded',function(e){
    //     geojsonLayer.addTo(map);
    //     map.fitBounds(geojsonLayer.getBounds());
    // });
     
 
   
});



