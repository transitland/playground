window.DeveloperPlayground = {};

DeveloperPlayground.StartQueryBuilderView = Backbone.View.extend({
    el: "#developer-playground",
    initialize: function () {
        this.render();
    },
    template: _.template("<h1>Start Query Builder</h1>"),
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

$(document).ready(function () {
    var startQueryBuilderView = new DeveloperPlayground.StartQueryBuilderView();
});
