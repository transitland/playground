var DeveloperPlayground = DeveloperPlayground || {};

app.ChildView = Backbone.View.extend({
	tagName: 'tr',
	// template: _.template( $('#stop-template').html() ),
	// events: {},
	
	initialize: function() {
		_.bindAll(this, 'render');
		this.listenTo(this.model, 'change', this.render);
	},
	
	render: function() {
		// Clear existing row data if needed
    jQuery(this.el).empty();
 
    // Write the table columns
    jQuery(this.el).append(jQuery('<td>' + this.model.get(DeveloperPlayground.startQueryBuilderView.stops.models[0].attributes.geometry.coordinates[0]) + '</td>'));
    jQuery(this.el).append(jQuery('<td>' + this.model.get(DeveloperPlayground.startQueryBuilderView.stops.models[0].attributes.geometry.coordinates[1]) + '</td>'));
 
    return this;

	} ,
});