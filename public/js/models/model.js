var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.Stop = Backbone.Model.extend({
	// use default values?
	// defaults: {
	// 	example: 'example',
	// 	example2: 'example2',
	// },

	initialize: function() {
		console.log('New stop created.');
	}

});

var stop = new Stop(
	// will be populated by individual responses
);