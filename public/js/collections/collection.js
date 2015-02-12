var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.Stops = Backbone.Collection.extend({
	model: DeveloperPlayground.Stop
});

// how to create models from a collection? (rather than
// crete a collection from a set of models)