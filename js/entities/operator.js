var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.Operator = Backbone.Model.extend({
	idAttribute: "onestop_id",
	defaults: {
		"display": true,
	},
	hide: function() {
		this.set({display: false});
	},
	show: function() {
		this.set({display: true});
	}
});

DeveloperPlayground.Operators = Backbone.Collection.extend({
	model: DeveloperPlayground.Operator,
	url: API_HOST + '/api/v1/operators.json',
	
	setQueryParameters: function(queryParameters) {
		this.url = queryParameters.url;
	},
	
	parse: function(response, xhr) {
		return response.operators;
	},

	listNames: function(nameListURL) {
		this.url = nameListURL.url;
	},

	hideAll: function() {
		this.each(function(model) {
			model.hide();
		});
	},

	visibleOperators: function() {
		return this.where({display: true});
	}
});



