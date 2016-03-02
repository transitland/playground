var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.CountryListView = Backbone.View.extend({
	el: '.btn-group#countryMenu',

   
	initialize:function(options){
        this.close();
        this.collection = options.collection;
        this.countryViews = [];
        
        this.listenTo(this.collection, 'add', this.renderCountry);
        this.collection.each(this.renderCountry, this);
    },

    renderCountry: function(model) {
        var countryView = new DeveloperPlayground.CountryView({
            model: model
        });        
        if (!_.contains(this.countryViews, model.get('country'))){
            this.countryViews.push(model.get('country'));
            $(".form-control#country", this.$el).append(countryView.render().$el);
        }

    },

    selectCountry: function(model) {
		this.$el.val();
		return this;
    },

    close: function() {
        $('.form-control#country', this.$el).empty();
        $('.form-control#country', this.$el).prepend("<option> </option>");
        this.stopListening();
        return this;
    }

});