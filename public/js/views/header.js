var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.HeaderView = Backbone.View.extend({
	tagName: 'thead',
    templateHeaderRow: _.template( $('#header-template').html() ),
	

	
	// events: {},
	
	initialize: function() {
		console.log("headerView initialized");
        this.render();


	},
	
	render: function() {

		console.log("headerView rendered");

		// this.$el.html(this.templateHeaderRow());

		if (this.collection instanceof DeveloperPlayground.Stops) {
			this.$el.html(this.templateHeaderRow());
			console.log("header instanceof WORKING", this.collection);
			return this;
		} else if (this.model instanceof DeveloperPlayground.Operator) {
			renderedHtml = this.templateStop(this.model.toJSON());
			this.$el.html(renderedHtml);
			return this;
		} else {
			console.log("header instanceof not working:",this.model);
			return this;
		}
	},

	// renderOne: function(model) {
 //        var row = new RowView({model:model});
 //        this.$el.append(row.render().$el);
 //        return this;
    // },
});




