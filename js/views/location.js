var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.LocationListView = Backbone.View.extend({
    el: '.center-text#toggle-location',
    template: _.template( $('#location-template').html() ),



	initialize:function(options){
        // console.log("location list renders");
            this.render();
    },

    render: function(options){
        renderedHtml = this.template();
        this.$el.html(renderedHtml);
    },

    close: function() {
        $(this.$el).empty();
        this.stopListening();
        return this;
    }

});