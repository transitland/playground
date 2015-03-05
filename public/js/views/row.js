var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.RowView = Backbone.View.extend({
	tagName: 'tr',
	templateRow: _.template( $('#row-template').html() ),
	templateStop: _.template( $('#stop-template').html() ),
	
	// events: {},
	
	initialize: function() {},
	
	render: function() {
		// var renderedHtml = "";
		console.log("model:", this.model, this.model instanceof DeveloperPlayground.Stop);

		if (this.model instanceof DeveloperPlayground.Stop) {
			console.log("model: stop");
			renderedHtml = this.templateRow(this.model.toJSON());
			this.$el.html(renderedHtml);
			return this;
		} else if (this.model instanceof DeveloperPlayground.Operator) {
			console.log("model: operator");
			renderedHtml = this.templateStop(this.model.toJSON());
			this.$el.html(renderedHtml);
			return this;
		} else {
			console.log("instanceof not working");
		}
	},

	// render: function() {
	//	this.$el.html(this.template(this.model.toJSON()));
		// return this;
	// },

	renderOne: function(model) {
        var row = new RowView({model:model});
        this.$el.append(row.render().$el);
        return this;
    },
});




