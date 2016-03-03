var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.CountryView = Backbone.View.extend({
	tagName: 'option',
	template: _.template( $('#country-template').html() ),

	render: function() {
		this.$el.get('country');
		renderedHtml = this.template(this.model.toJSON());
		this.$el.html(renderedHtml);
		this.$el.val(this.model.get('country'));
		this.$el.text(this.model.get('country'));
		return this;
	},

 });