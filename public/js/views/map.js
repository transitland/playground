var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.MapView = Backbone.View.extend({
    el: '#map-view',

	// events: {},

    initialize: function () {
        console.log("mapview initialized");
        // this.render();
    },
    
    render: function() {
        var map = L.map('map-view').setView([37.77293, -122.21433], 4);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(map);
        return this;
    }
     
 
   
});



