var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.Operator = Backbone.Model.extend();

DeveloperPlayground.Operators = Backbone.Collection.extend({
	model: DeveloperPlayground.Operator,
	// fake api endpoint url: 'http://localhost:4567/api/v1/operators.json?identifier=BART',
	setQueryParameters: function(queryParameters) {
		this.url = 'http://localhost:4567/api/v1/operators.json?identifier=' + queryParameters.identifier;
	},
	// this overrides built-in parse function
	parse: function(response, xhr) {
		return response.operators;
	}
});



