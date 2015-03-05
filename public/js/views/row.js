var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.RowView = Backbone.View.extend({
	tagName: 'tr',
	templateRow: _.template( $('#row-template').html() ),
	templateStop: _.template( $('#stop-template').html() ),

	
	// events: {},
	
	initialize: function() {},
	
	render: function() {

		if (this.model instanceof DeveloperPlayground.Stop) {
			renderedHtml = this.templateRow(this.model.toJSON());
			this.$el.html(renderedHtml);
			return this;
		} else if (this.model instanceof DeveloperPlayground.Operator) {
			renderedHtml = this.templateStop(this.model.toJSON());
			this.$el.html(renderedHtml);
			return this;
		} else {
			console.log("instanceof not working");
		}
	},

	renderOne: function(model) {
        var row = new RowView({model:model});
        this.$el.append(row.render().$el);
        return this;
    },
});




