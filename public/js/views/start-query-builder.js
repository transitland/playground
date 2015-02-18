var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.StartQueryBuilderView = Backbone.View.extend({
    el: "#developer-playground",

    template: _.template($('#playground-template').html()),

    events: {
        'change .form-control#entity': 'changeParam'
        // 'change .form-control#parameter': 'changeView',
    },

    initialize: function () {
        this.mapview = new DeveloperPlayground.MapView();
        // this.tableview = new DeveloperPlayground.TableView;
        this.render();
    },
    
    render: function() {
        this.$el.html(this.template());
        this.mapview.render();
        // this.$("#table-view").append(this.tableview.render().el);
        return this;
    },

    

    changeParam: function() {
        var $entitySelect = $('select.form-control#entity');
        var $parameterSelect = $('select.form-control#parameter');
        var selectValues = {
            "stops": {
                "bbox": "",
                "hello": "world",
            },
            "operator": {
                "name": "",
            }
        };


        $parameterSelect.empty().append(function() {
            var output = '';
            $.each(selectValues[$entitySelect.val()], function(key, value) {
                output += '<option>' + key + '</option>';
            });
            return output;
        });
    }
});