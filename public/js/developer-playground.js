window.DeveloperPlayground = {};

DeveloperPlayground.StartQueryBuilderView = Backbone.View.extend({
    el: "#developer-playground",

    // events: {},

    // Drew's initial draft was this:
    // template: _.template("<h1>Start Query Builder</h1>"),

    // but this worked:
    template: _.template($('#playground-template').html()),

    events: {
        'change .form-control#entity': 'changeParam'
    },

    initialize: function () {
        this.render();
    },
    
    render: function() {
        this.$el.html(this.template());
        return this;
    },

    changeParam: function() {
        var selectValues = {
            "stops": {
                "bbox": ""
            },
            "operator": {
                "name": ""
            }
        };

        var $entitySelect = $('select.form-control#entity');
        var $parameterSelect = $('select.form-control#parameter');
        $entitySelect.change(function() {
            $parameterSelect.empty().append(function() {
                var output = '';
                $.each(selectValues[$entitySelect.val()], function(key, value) {
                    output += '<option>' + key + '</option>';
                });
                console.log("HI!");
                return output;
            });
        });
        }
});




$(document).ready(function () {
    var startQueryBuilderView = new DeveloperPlayground.StartQueryBuilderView();
    // changeParam();
    
});



// example url:
// $.ajax({url: "http://localhost:4567/api/v1/stops.json?bbox=-122.39893913269043,37.76651662158726,-122.38070011138915,37.77178331201861", async: false, dataType: "json", success: function(json) {exampleValues = json;}});