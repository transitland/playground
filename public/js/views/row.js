var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.RowView = Backbone.View.extend({
	tagName: 'tr',
	template: _.template( $('#row-template').html() ),
	// template: _.template( $('#stop-template').html() ),
	
	// events: {},
	
	initialize: function() {},
	
	// render: function(model) {
	//	var renderedHtml = "";
	//	var modelType = model;

	//	if (model instanceof DeveloperPlayground.Stops) {
	//		console.log("model: stop");
	//		renderedHtml = this.row-template(this.model.toJSON());
	//		this.$el.html(renderedHtml);
	//		return this;
	//	} else if (model == DeveloperPlayground.operators) {
	//		console.log("model: operator");
	//		renderedHtml = this.row-template(this.model.toJSON());
	//		this.$el.html(renderedHtml);
	//		return this;
	//	}
	// },

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	renderOne: function(model) {
        var row = new RowView({model:model});
        this.$el.append(row.render().$el);
        return this;
    },
});




