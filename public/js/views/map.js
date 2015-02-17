var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.MapView = Backbone.View.extend({
    el: '#map-view',

    // template: _.template($('#map-view').html()),

	// events: {},

    initialize: function () {
        console.log("mapview initialized");
        // this.render();
    },
    
    render: function() {
		// this.$el.html(this.template());
        // debugger;
        var map = L.map('map-view').setView([37.77293, -122.21433], 4);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(map);
        return this;
    }
     
 
    // render: function () {
    //     var template = _.template($('#map-template').html(), {stops: stops.models});
    //     this.$el.html(template);

    //     var map = L.map(this.$('#map')[0]).setView ([55.75, 37.58], 10); L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {maxZoom: 18
    //     }).addTo(map);

    //     console.log("MAP!!");
    //     return this;
    // },

});

// var mapView = new MapView();



// var map = L.map('map').setView([37.749, -122.443], 1);

// var stopTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {
//     maxZoom: 18
//   });

// stopTiles.addTo(map);


