var DeveloperPlayground = DeveloperPlayground || {};

var url = 'http://localhost:4567/api/v1/operators.json?identifier=Muni';

var DeveloperPlayground.stops = new DeveloperPlayground.Stops(myJSON, {view: this});

var myJSON = $.getJSON(url);

DeveloperPlayground.Stops = Backbone.Collection.extend({
	model: DeveloperPlayground.Stop

	initialize: function (models, options){

	}

});


// how to create models from a collection? (rather than
// crete a collection from a set of models)