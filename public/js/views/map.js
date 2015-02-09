var MapView = Backbone.View.extend({
    // el: '.content',
     
    initialize:function(){
        this.render();
    },
    render: function () {
        var template = _.template($('#mapTemplate').html(), {stops: stops.models});
        this.$el.html(template);
    }
});

var mapView = new MapView();


// var map = L.map('map').setView([37.749, -122.443], 1);

// var stopTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {
//     maxZoom: 18
//   });

// stopTiles.addTo(map);