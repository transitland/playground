var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.TableView = Backbone.View.extend({
    el: '.table',

    template: _.template($('#table-template').html(), {stops: stops.models}),
     
    initialize:function(){
        this.render();
    },

    render: function () {
        var template = _.template($('#stop-list-template').html(), {stops: stops.models});
        this.$el.html(template);
    }
});

var tableView = new TableView();