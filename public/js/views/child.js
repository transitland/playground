var app = app || {};

app.ChildView = Backbone.View.extend({
	tag name: 'li',
	template: _.template( $('#item-template').html() ),
	// events: {},
	
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	
	render: function() {} ,
})