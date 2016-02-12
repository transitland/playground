var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.NameListView = Backbone.View.extend({
	el: '.btn-group#nameMenu',

	initialize:function(options){
        this.collection = options.collection;
        this.listenTo(this.collection, 'add', this.renderName);
        this.collection.each(this.renderName, this);
    },

    renderName: function(model) {
        var nameView = new DeveloperPlayground.NameView({
            model: model
        });

        // use region selection to render list of operator names
        if (model.get('metro') === $('select.form-control#region')){
            $(".form-control#name", this.$el).append(nameView.render().$el);
        }

        // Code below is what we used to toggle between SF and NYC:
        //     
        // if ($(".btn#san-francisco").hasClass("selected")) {
        //     if (model.get('metro') === 'San Francisco Bay Area'){
        //         $(".form-control#name", this.$el).append(nameView.render().$el);
        //     }
        // } else if ($(".btn#new-york").hasClass("selected")) {
        //     if (model.get('metro') === 'New York City'){
        //         $(".form-control#name", this.$el).append(nameView.render().$el);
        //     }
        // }
    },

    selectName: function(model) {
		this.$el.val();
		return this;
    },

    close: function() {
        $('.form-control#name', this.$el).empty();
        this.stopListening();
        return this;
    }

});