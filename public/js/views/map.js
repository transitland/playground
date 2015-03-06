var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.MapView = Backbone.View.extend({
    el: '#map-view',

	// events: {},

    initialize: function () {
        console.log("mapview initialized");
        this.map = null;
    },
    
    render: function() {
        this.map = L.map('map-view').setView([37.749, -122.443], 7);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {maxZoom: 18})
            .addTo(this.map);
        return this;
    },

    add_stop: function(stop) {
        var s = {'type': 'Feature', 'geometry':stop.attributes.geometry};
        L.geoJson(s).addTo(this.map);
    },
    

    // 
    // 
    // Start editing this on Friday:
    // 
    add_polygon: function(operator) {
       
        console.log("this:",operator);

        var coordinateArray = [];

        for (var i = 0; i < operator.models[0].attributes.geometry.coordinates[0].length; i++) {
            coordinateArray.push.apply(this.models[0].attributes.geometry.coordinates[i]);
        }

        // var operatorPolygon = L.polygon([
        //     coordinateArray
        // ]).addTo(this.map);

        (console.log(coordinateArray));

        return this;

    }
    // 
    // 
    // 

});



