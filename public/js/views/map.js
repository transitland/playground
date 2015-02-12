window.DeveloperPlayground = {};

DeveloperPlayground.MapView = Backbone.View.extend({
    el: '#map-view',

    template: _.template($('#map-template').html()),

    initialize: function () {
        this.render();
        console.log("mapview initialized");
    },
    
    render: function() {
        this.$el.html(this.template());
        console.log("mapview rendered");
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

$(document).ready(function () {
    var mapView = new DeveloperPlayground.MapView();
    console.log("mapView added");
});


// var map = L.map('map').setView([37.749, -122.443], 1);

// var stopTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {
//     maxZoom: 18
//   });

// stopTiles.addTo(map);


