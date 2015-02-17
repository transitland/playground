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

    // changeView: function(view) {
    //     console.log("changeView:", view);
    //     $("#map-view").text("Ok!");
    // },

    changeParam: function() {
         // this works, but it might not be best practice
         // please review
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

        // var mode = $entitySelect.val();
        // console.log("Setting mode:", mode);

        $parameterSelect.empty().append(function() {
            var output = '';
            $.each(selectValues[$entitySelect.val()], function(key, value) {
                output += '<option>' + key + '</option>';
            });
            return output;
        });
    }
});