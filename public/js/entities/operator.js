var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.Operator = Backbone.Model.extend();

DeveloperPlayground.Operators = Backbone.Collection.extend({
	model: DeveloperPlayground.Operator,
	// url: 'http://localhost:4567/api/v1/operators.json?identifier=BART',
	setQueryParameters: function(queryParameters) {
		this.url = 'http://localhost:4567/api/v1/operators.json?identifier=' + queryParameters.identifier;
	}
	parse: function(response, xhr) {
		return response.operators;
	}
});


// stops.bind('reset', function() {
// StartQueryBuilderView.render();
// });



