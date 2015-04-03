var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.Route = Backbone.Model.extend();

DeveloperPlayground.Routes = Backbone.Collection.extend({
	model: DeveloperPlayground.Route,
	url: API_HOST + '/api/v1/routes.json',
	
	setQueryParameters: function(queryParameters) {
		this.identifier = queryParameters.identifier;
		this.url = queryParameters.url;
        console.log("API query url: ", this.url);
	},
	
	parse: function(response, xhr) {
		return response.routes;
	}
});


