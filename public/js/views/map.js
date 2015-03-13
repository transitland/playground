var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.MapView = Backbone.View.extend({
    el: '#map-view',

    // initialize: function () {
    //     this.render();
    // },

    setCollection: function(options){
        this.collection = options.collection;
        this.listenTo(this.collection, 'add', this.add_point);
    },
    
    render: function() {
        this.featuregroup = new L.featureGroup();
        this.map = L.map('map-view').setView([37.749, -122.443], 9);
        this.bounds=this.map.getBounds();
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/randyme.k5036ipp/{z}/{x}/{y}.png', {maxZoom: 18})
            .addTo(this.map);
        return this;
    },

    add_point: function(stop) {
        var s = {'type': 'Feature', 'geometry':stop.attributes.geometry};
        L.geoJson(s).addTo(this.featuregroup);
        this.featuregroup.addTo(this.map);
        this.map.fitBounds(this.featuregroup.getBounds());
        return this;
    },

    removeFeatureGroup: function(){
        this.map.removeLayer(this.layergroup);
    }

});



