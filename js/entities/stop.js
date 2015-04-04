var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.Stop = Backbone.Model.extend({
	operatorNames: function() {
		var operatorsServingStop = this.get("operators_serving_stop");
		var operatorNames = _.map(operatorsServingStop, function(operatorServingStop) {
			return operatorServingStop.operator_name;
		});
		var operatorNamesString = operatorNames.join(', ');
		return operatorNamesString;
	},
	get: function(attr) {
		// TODO: replace this hack with a real solution
		if (attr == 'operatorNames') {
			return this.operatorNames();
		} else {
			return this.attributes[attr];
		}
	}
});

DeveloperPlayground.Stops = Backbone.Collection.extend({
	model: DeveloperPlayground.Stop,
	url: API_HOST + '/api/v1/stops.json',

	setQueryParameters: function(queryParameters) {
		this.identifier = queryParameters.identifier;
		this.url = queryParameters.url;
        console.log("API query url: ", this.url);
	},
	
	parse: function(response, xhr) {
		return response.stops;
	}
});


