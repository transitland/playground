var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.RowView = Backbone.View.extend({
	tagName: 'tr',
	// template: _.template( $('#stop-template').html() ),
	events: {
		"click .latitude": function() {console.log(this.model.get("latitude"));}
	},
	
	initialize: function() {
        _.bindAll(this, 'render', 'renderOne');
		// _.bindAll(this, 'render');
		// this.listenTo(this.model, 'change', this.render);
	},
	
	render: function() {
		// Clear existing row data if needed
		// test this out:
		this.model.each(this.renderOne);
		var html = rowTemplate(this.model());
		this.setElement($(html));
        return this;
        // example:
		// var html = rowTemplate(this.model());
		// this.setElement($(html));
		// return this;
	},

	renderOne: function(model) {
        var row=new RowView({model:model});
        this.$el.append(row.render().$el);
        return this;
    },
});

	// Write the table columns
    // Might append these in a function in table instead
    // $('#tbody').append('<td>' + this.model.get(DeveloperPlayground.startQueryBuilderView.stops.models[0].attributes.geometry.coordinates[0]) + '</td>');
    // $('#tbody').append('<td>' + this.model.get(DeveloperPlayground.startQueryBuilderView.stops.models[1].attributes.geometry.coordinates[1]) + '</td>');
 
    // return this;


