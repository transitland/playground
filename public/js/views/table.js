var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.TableView = Backbone.View.extend({
    el: '#table-view',

    // template: _.template($('#table-template').html(), {stops: stops.models}),
     
    initialize:function(){
        // this.render();
        console.log("tableview initialized");
        // this.table = null;
        // this.listenTo(DeveloperPlayground.Stops, 'add', this.addOne);
        // DeveloperPlayground.Stops.fetch():
    },

    render: function () {
        // var template = _.template($('#stop-list-template').html(), {stops: stops.models});
        // this.$el.html(template);
        return this;
    },

    //  addOne: function(todo) {
    //	var row = new DeveloperPlayground.StopRow({model:stop});
    //	$('#stop-list-template-list').append(row.render().el);
    //  },

    add_stop: function(stop) {
        // add a stop to the table
        var s = {'type': 'Feature', 'geometry':stop.attributes.geometry};
        console.log(s);
    }

});

// var tableview = new TableView();