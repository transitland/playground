var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.GridView = Backbone.View.extend({
    el: '.backgrid-container',

    initialize:function(options){
        this.collection = options.collection;
        this.listenTo(this.collection, 'sync', this.render);
    },

    render: function(model){

        var columns;
        var grid;
        var $entitySelect = $('select.form-control#entity');


        if ($entitySelect.val() == "operators"){

            columns = [{
                name: "id",
                label: "ID",
                renderable: false,
                editable: false,
                cell: Backgrid.IntegerCell.extend({
                  orderSeparator: ''
                })
              }, {
                name: "name",
                label: "Operator name",
                editable: false,
                cell: "string"
              }, {
                name: "tags.agency_url",
                label: "Operator website",
                editable: false,
                cell: "uri"
              }, {
                name: "onestop_id",
                label: "OneStop ID",
                editable: false,
                cell: "string"
            }];
            grid = new Backgrid.Grid({
            columns: columns,
            collection: this.collection
            });
            $("#results").append(grid.render().$el);
            console.log("model: ", model);
        } else if ($entitySelect.val() == "stops"){
            columns = [{
                name: "id",
                label: "ID",
                renderable: false,
                editable: false,
                cell: Backgrid.IntegerCell.extend({
                  orderSeparator: ''
                })
              }, {
                name: "name",
                label: "Stop name",
                editable: false,
                cell: "string"
              }, {
                name: "operators_serving_stop",
                label: "Operators serving stop",
                editable: false,
                cell: "string"
              }, {
                name: "onestop_id",
                label: "OneStop ID",
                editable: false,
                cell: "string"
            }];

            grid = new Backgrid.Grid({
            columns: columns,
            collection: this.collection
            });
            $("#results").append(grid.render().$el);
        } else if ($entitySelect.val() == "routes"){
            columns = [{
                name: "id",
                label: "ID",
                renderable: false,
                editable: false,
                cell: Backgrid.IntegerCell.extend({
                  orderSeparator: ''
                })
              }, {
                name: "name",
                label: "Route name",
                editable: false,
                cell: "string"
              }, {
                name: "tags.agency_id",
                label: "Operator",
                editable: false,
                cell: "string"
              }, {
                name: "onestop_id",
                label: "OneStop ID",
                editable: false,
                cell: "string"
            }];

            grid = new Backgrid.Grid({
            columns: columns,
            collection: this.collection
            });
            $("#results").append(grid.render().$el);
        }

    },

    close: function() {
        $(this.$el).empty();
        this.stopListening();
        return this;
    }

});

