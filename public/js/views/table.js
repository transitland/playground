var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.TableView = Backbone.View.extend({
    el: 'table#table-view',
     
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
    //     $("table#table-view tbody").empty();

    // }

    remove: function() {
      this.$el.empty().off(); /* off to unbind the events */
      this.stopListening();
      return this;
    }

});

