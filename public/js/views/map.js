var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.MapView = Backbone.View.extend({
    el: '#map-view',

	// events: {},

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
        // console.log(s);
        L.geoJson(s).addTo(this.map);
    }

});



