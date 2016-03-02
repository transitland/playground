var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.StateListView = Backbone.View.extend({
	el: '.btn-group#stateMenu',

   
	initialize:function(options){
        this.close();
        this.collection = options.collection;
        this.stateViews = [];
        
        this.listenTo(this.collection, 'add', this.renderState);
        this.collection.each(this.renderState, this);
    },

    renderState: function(model) {
        var $countrySelect = $('select.form-control#country').val();

        var stateView = new DeveloperPlayground.StateView({
            model: model
        });
     
        if ((!_.contains(this.stateViews, model.get('state'))) && (model.get('country') === $countrySelect)){
            this.stateViews.push(model.get('state'));
            $(".form-control#state", this.$el).append(stateView.render().$el);
        }

    },

    selectState: function(model) {
		this.$el.val();
		return this;
    },

    close: function() {
        $('.form-control#state', this.$el).empty();
        $('.form-control#state', this.$el).prepend("<option> </option>");
        this.stopListening();
        return this;
    }

});