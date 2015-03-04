var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.RowView = Backbone.View.extend({
	tagName: 'tr',
	template: _.template( $('#row-template').html() ),
	
	// events: {},
	
	initialize: function() {},
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	renderOne: function(model) {
        var row=new RowView({model:model});
        this.$el.append(row.render().$el);
        return this;
    },
});




