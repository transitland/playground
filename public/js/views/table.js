var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.TableView = Backbone.View.extend({
    el: 'table',

    // template: _.template($('#table-template').html(), {stops: stops.models}),
     
    initialize:function(){
        // this.render();
        console.log("tableview initialized");
        _.bindAll(this, 'render', 'renderOne');
        // this.listenTo(DeveloperPlayground.Stops, 'add', this.addOne);
        // DeveloperPlayground.Stops.fetch():
    },

    render: function () {
        // var template = _.template($('#stop-list-template').html(), {stops: stops.models});
        // this.$el.html(template);
        // this.collection.each(this.renderOne);
        // return this;
    },

    // renderOne: function(model) {
    //     var row=new RowView({model:model});
    //     this.$el.append(row.render().$el);
    //     return this;
    // }

    //  addOne: function(todo) {
    //	var row = new DeveloperPlayground.StopRow({model:stop});
    //	$('#stop-list-template-list').append(row.render().el);
    //  },

    // add_stop: function(stop) {
    //     // add a stop to the table
    //     var s = {
    //         'type': 'Feature',
    //         'longitude':stop.attributes.geometry.coordinates[0],
    //         'latitude':stop.attributes.geometry.coordinates[1]
    //     };
    //     console.log("add_stop: "+s);

        // append row to table here, not in row.js

        // s.addTo(this.table);
    // }

});

// var tableview = new TableView();