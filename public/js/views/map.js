var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.MapView = Backbone.View.extend({
    // el: '#map map-view',
    el: '#map-view',

    

    initialize: function (options) {
        this.collection = options.collection;
        // console.log("mapview initialized");
        // this.map = null;
        this.listenTo(this.collection, 'add', this.add_point);
    },
    
    render: function() {
        this.map = L.map('map-view').setView([37.749, -122.443], 7);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {maxZoom: 18})
            .addTo(this.map);
        this.layergroup = new L.layerGroup();
        return this;
    },

    add_point: function(stop) {

        var s = {'type': 'Feature', 'geometry':stop.attributes.geometry};
        L.geoJson(s).addTo(this.layergroup);
        this.layergroup.addTo(this.map);
        // this.map.fitBounds(this.layergroup);
        return this;
    },

    remove_layergroup: function(){
        this.layergroup.clearLayers();
        return this;
    }

});



