var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.RegionListView = Backbone.View.extend({
	el: '.btn-group#regionMenu',
   
	initialize:function(options){
        this.collection = options.collection;
        this.listenTo(this.collection, 'add', this.renderRegion);
        this.collection.each(this.renderRegion, this);
    },

    renderRegion: function(model) {
        var regionView = new DeveloperPlayground.RegionView({
            model: model
        });

        var locations = _.uniq(this.collection.pluck('metro'));
      

        // if new model's metro is not in locations, then:

        $(".form-control#region", this.$el).append(regionView.render().$el);


    },

    selectRegion: function(model) {
		this.$el.val();
		return this;
    },

    close: function() {
        $('.form-control#region', this.$el).empty();
        this.stopListening();
        return this;
    }

});