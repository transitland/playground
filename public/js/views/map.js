var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.MapView = Backbone.View.extend({
    // el: '#map map-view',
    el: '#map-view',

    

    initialize: function (options) {
        this.collection = options.collection;
        this.listenTo(this.collection, 'add', this.add_point);

    },
    
    render: function() {
        // this.layergroup = new L.layerGroup();
        this.featuregroup = new L.featureGroup();
        this.map = L.map('map-view').setView([37.749, -122.443], 7);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {maxZoom: 18})
            .addTo(this.map);
        return this;
    },

    add_point: function(stop) {
        var s = {'type': 'Feature', 'geometry':stop.attributes.geometry};
        // this.featuregroup.clearLayers();
        // this.layergroup.clearLayers();
        L.geoJson(s).addTo(this.featuregroup);
        // L.geoJson(s).addTo(this.layergroup);
        this.featuregroup.addTo(this.map);
        // this.layergroup.addTo(this.map);
        this.map.fitBounds(this.featuregroup.getBounds());
        // this.map.fitBounds(this.featuregroup.getBounds(), {padding: [80,80]});
        // this.map.fitBounds(this.layergroup.getBounds());
        return this;
    },

    removeFeatureGroup: function(){
        this.map.removeLayer(this.layergroup);
        // this.map.removelayer(this.featuregroup);
    }

});



