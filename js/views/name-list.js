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
        var $regionSelect = $('select.form-control#region');
        var $stateSelect = $('select.form-control#state');
        var $countrySelect = $('select.form-control#country');
        var $parameterSelect = $('select.form-control#parameter');
       

        if (($countrySelect.val() === '' || $countrySelect.val() === 'undefined' ) && ($parameterSelect.val() == "name" || $parameterSelect.val() == "operator")) {
            $(".form-control#name", this.$el).append(nameView.render().$el);
        } else if (($stateSelect.val() === '' || $stateSelect.val() === 'undefined' ) && (model.get('country') === $countrySelect.val())){
            $(".form-control#name", this.$el).append(nameView.render().$el);
        } else if (($regionSelect.val() === '' || $regionSelect.val() === 'undefined' ) && (model.get('state') === $stateSelect.val())){
            $(".form-control#name", this.$el).append(nameView.render().$el);
        } else if (model.get('metro') === $regionSelect.val()){
            $(".form-control#name", this.$el).append(nameView.render().$el);
        }

    },

    selectName: function(model) {
		this.$el.val();
		return this;
    },

    close: function() {
        $('.form-control#name', this.$el).empty();
        $('.form-control#name', this.$el).prepend("<option> </option>");
        this.stopListening();
        return this;
    }

});