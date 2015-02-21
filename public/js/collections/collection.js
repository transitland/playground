var DeveloperPlayground = DeveloperPlayground || {};


var Stops = Backbone.Collection.extend({
	model: DeveloperPlayground.Stop,
	url: 'http://localhost:4567/api/v1/operators.json?identifier=BART'
});

var stops = new Stops();

stops.fetch();
stops.bind('reset', function() {
	StartQueryBuilderView.render();
});



