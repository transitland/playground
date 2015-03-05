var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.RowView = Backbone.View.extend({
	tagName: 'tr',
	template: _.template( $('#row-template').html() ),
	// template: _.template( $('#stop-template').html() ),
	
	// events: {},
	
	initialize: function() {},
	
	// render: function() {
	//	if is a stop {
	//		var renderedHtml = this.stopTemplate(this.model.toJSON())	
	//	}
		
	//	this.$el.html(renderedHtml);
	//	return this;
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




