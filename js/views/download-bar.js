var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.DownloadView = Backbone.View.extend({
	el: '#download-bar',
	
	template: _.template( $('#download-bar-template').html() ),

	events: {
        'click .btn' : 'submit',
    },

    //  if (feature.get('display') !== false) {


	render: function() {
		renderedHtml = this.template();
		this.$el.html(renderedHtml);
        $("#download-bar").hide();
		return this;
		},

	setCollection: function(options){
        this.collection = options.collection;
    },

	submit: function(event) {

		if (this.collection.url.split("/").pop() == "operators.json" ) {
			url = this.collection.url + "?onestop_id=" + this.collection.findWhere({display: true}).get("onestop_id");
		} else {
			url = this.collection.url;
		}

		// if only one operator is visible, then set url parameter to include that operator identifier
        
		if (event.target.id == "csv") {
			url = url.replace(".json", ".csv");
		} else if (event.target.id == "json") {
			var blob = new Blob([JSON.stringify(this.collection.toJSON())], {type: "application/json;charset=utf-8"});
			saveAs(blob, "download.json");
		}

		window.open(url, '_blank');

	}


 });
