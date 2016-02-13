var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.RegionView = Backbone.View.extend({
	tagName: 'option',
	template: _.template( $('#region-template').html() ),

	render: function() {
		this.$el.get('metro');
		renderedHtml = this.template(this.model.toJSON());
		this.$el.html(renderedHtml);
		console.log(this.model.get('country') + ", " + this.model.get('state') + ", " + this.model.get('metro'));
		this.$el.val(this.model.get('metro'));
		this.$el.text(this.model.get('country') + ", " + this.model.get('state') + ", " + this.model.get('metro'));
		return this;
	},

 });