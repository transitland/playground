var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.StateView = Backbone.View.extend({
	tagName: 'option',
	template: _.template( $('#state-template').html() ),

	render: function() {
		this.$el.get('state');
		renderedHtml = this.template(this.model.toJSON());
		this.$el.html(renderedHtml);
		this.$el.val(this.model.get('state'));
		this.$el.text(this.model.get('state'));
		return this;
	},

 });