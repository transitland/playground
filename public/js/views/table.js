var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.TableView = Backbone.View.extend({
    el: 'table#table-view',

    // templateClearRows: _.template( $('#clear-rows-template').html() ),
     
    initialize:function(options){
        this.collection = options.collection;
        $("tbody", this.$el).empty(this.$el);
        this.listenTo(this.collection, 'add', this.renderRow);
    },

    renderRow: function(model) {
        var rowView = new DeveloperPlayground.RowView({
            model: model
        });
        $("tbody", this.$el).append(rowView.render().$el);
    },

    // clearRows: function() {
    //     console.log("clear rows here");
    //     $("tbody", this.$el).empty($el);

    // }

});

