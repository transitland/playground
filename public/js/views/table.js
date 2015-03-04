var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.TableView = Backbone.View.extend({
    el: 'table#table-view',
     
    initialize:function(options){
        this.collection = options.collection;
        console.log("tableview initialized");
        this.listenTo(this.collection, 'add', this.renderRow);

    },

    render: function () {
        this.collection.each(this.renderRow);
        return this;
    },

    renderRow: function(model) {
        var rowView = new DeveloperPlayground.RowView({model: model});
        $("tbody", this.$el).append(rowView.render().$el);
    }

});

