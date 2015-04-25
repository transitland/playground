var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.DownloadView = Backbone.View.extend({
	el: '#download-bar',
	
	// template: _.template( $('#download-bar-template').html() ),

	events: {
        'click .btn' : 'submit',
    },

	render: function() {
		// renderedHtml = this.template();
		// this.$el.html(renderedHtml);

		// var hideTemplate = _.template( $('#download-bar-template-hidden').html() );
		// this.$el.append(hideTemplate);
		return this;
	},

	setCollection: function(options){
        this.collection = options.collection;
    },

    showTemplate: function(){
		// $('#download-bar-template-hidden', this.$el).empty();
		// var showTemplate = _.template( $('#download-bar-template').html() );
		// this.$el.append(showTemplate);

		if ($('#download-bar').is(':empty')){
			console.log("yes");
            var showTemplate = _.template( $('#download-bar-template').html() );
			this.$el.append(showTemplate);
        }
    },

	submit: function(event) {
		url = this.collection.url;
        
		if (event.target.id == "csv") {
			url = url.replace(".json", ".csv");
		} else if (event.target.id == "json") {
			var blob = new Blob([JSON.stringify(this.collection.toJSON())], {type: "application/json;charset=utf-8"});
			saveAs(blob, "download.json");
		}

		window.open(url, '_blank');

	},


 });
