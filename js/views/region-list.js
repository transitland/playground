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
        
        if ($(".btn#san-francisco").hasClass("selected")) {
            if (model.get('metro') === 'San Francisco Bay Area'){
                $(".form-control#name", this.$el).append(nameView.render().$el);
            }
        } else if ($(".btn#new-york").hasClass("selected")) {
            if (model.get('metro') === 'New York City'){
                $(".form-control#name", this.$el).append(nameView.render().$el);
            }
        }
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