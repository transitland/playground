var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.Stop = Backbone.Model.extend();

DeveloperPlayground.Stops = Backbone.Collection.extend({
	model: DeveloperPlayground.Stop,
	setQueryParameters: function(queryParameters) {
		// this.url = 'http://localhost:4567/api/v1/stops.json?bbox=-122.39893913269043,37.76651662158726,-122.38070011138915,37.77178331201861';
		this.identifier = queryParameters.identifier;
		this.url = queryParameters.url;
        console.log("url: ", this.url);
	},
	parse: function(response, xhr) {
		return response.stops;
	}
});


