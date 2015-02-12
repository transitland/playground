var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.StartQueryBuilderView = Backbone.View.extend({
    el: "#developer-playground",

    template: _.template($('#playground-template').html()),

    events: {
        'change .form-control#entity': 'changeParam',
        // 'change .form-control#parameter': 'changeView',
    },

    initialize: function () {
        // this.mapview = new DeveloperPlayground.Mapview;
        // this.tableview = new DeveloperPlayground.TableView;
        this.render();
    },
    
    render: function() {
        this.$el.html(this.template());
        // this.$("#map-view").append(this.mapview.render().el);
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




$(document).ready(function () {
    var startQueryBuilderView = new DeveloperPlayground.StartQueryBuilderView();

    // changeParam();
    
});



// example url:
// $.ajax({url: "http://localhost:4567/api/v1/stops.json?bbox=-122.39893913269043,37.76651662158726,-122.38070011138915,37.77178331201861", async: false, dataType: "json", success: function(json) {exampleValues = json;}});