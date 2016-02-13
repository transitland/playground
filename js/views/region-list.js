var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.RegionListView = Backbone.View.extend({
	el: '.btn-group#regionMenu',

   
	initialize:function(options){
        this.collection = options.collection;
        this.regionViews = [];
        this.listenTo(this.collection, 'add', this.renderRegion);
        this.collection.each(this.renderRegion, this);

        // $(".form-control#region", this.$el).append(function() {

        // });
    },

    renderRegion: function(model) {
        var regionView = new DeveloperPlayground.RegionView({
            model: model
        });
        
        if (!_.contains(this.regionViews, model.get('metro'))){
            this.regionViews.push(model.get('metro'));
            $(".form-control#region", this.$el).append(regionView.render().$el);
        }

    },

    selectRegion: function(model) {
		this.$el.val();
		return this;
    },

    close: function() {
        $('.form-control#region', this.$el).empty();
        $('.form-control#region', this.$el).prepend("<option> </option>");
        this.stopListening();
        return this;
    }

});