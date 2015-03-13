var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.MapView = Backbone.View.extend({
    // el: '#map map-view',
    el: '#map-view',

    

    initialize: function (options) {
        this.collection = options.collection;
        this.listenTo(this.collection, 'add', this.add_point);
        this.listenTo(this.collection, 'sync', this.addLayerGroup);

    },
    
    render: function() {
        this.layergroup = new L.layerGroup();
        this.map = L.map('map-view').setView([37.749, -122.443], 7);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {maxZoom: 18})
            .addTo(this.map);
        return this;
    },

    add_point: function(stop) {

        var s = {'type': 'Feature', 'geometry':stop.attributes.geometry};
        this.layergroup.clearLayers();
        L.geoJson(s).addTo(this.layergroup);
        this.layergroup.addTo(this.map);
        // this.map.fitBounds(this.layergroup);
        return this;
    },

});



