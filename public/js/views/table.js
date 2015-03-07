var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.TableView = Backbone.View.extend({
    el: 'table#table-view',


     
    initialize:function(options){
        this.collection = options.collection;
        this.listenTo(this.collection, 'add', this.renderRow);
        this.listenTo(this.collection, 'sync', this.renderHeader);
    },

    renderHeader: function(model) {
        var headerView = new DeveloperPlayground.HeaderView({
            collection: this.collection
        });
    },

    renderRow: function(model) {
        var rowView = new DeveloperPlayground.RowView({
            model: model
        });
        $("tbody", this.$el).append(rowView.render().$el);
    }

});

