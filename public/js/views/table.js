var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.TableView = Backbone.View.extend({
    el: 'table#table-view',

    // templateHeaderRow: _.template( $('#header-template').html() ),

     
    initialize:function(options){
        this.collection = options.collection;
        console.log("tableview initialized");
        this.headerView = new DeveloperPlayground.HeaderView({collection: this.collection});
        this.listenTo(this.collection, 'add', this.renderRow);
        // this.listenTo(this.collection, 'add', this.renderHeader);
        // this.headerView = new DeveloperPlayground.HeaderView();
    },

    render: function () {
        this.collection.each(this.renderRow);
        // this.collection.each(this.renderHeader);
        return this;
    },

    // renderHeader: function(model) {
    //     var headerView = new DeveloperPlayground.HeaderView({model: model});
    //     $("thead", this.$el).append(headerView.render().$el);
    // },

    renderRow: function(model) {
        var rowView = new DeveloperPlayground.RowView({model: model});
        $("tbody", this.$el).append(rowView.render().$el);
    }

});

