var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.StartQueryBuilderView = Backbone.View.extend({
    el: "#developer-playground",

    template: _.template($('#playground-template').html()),

    events: {
        'change .form-control#entity': 'changeParam',
        'change .form-control#parameter': 'changeName',
        'click .btn' : 'submit',
    },

    initialize: function () {
        this.mapview = new DeveloperPlayground.MapView();
        // this.tableview = new DeveloperPlayground.TableView();
        this.operators = new DeveloperPlayground.Operators();
        this.stops = new DeveloperPlayground.Stops();
        this.render();
    },
    
    render: function() {
        this.$el.html(this.template());
        $(".form-control#operator-name").hide();
        // this.$("#table-view").append(this.tableview.render().el);
        return this;
    },

    changeParam: function() {
        var $entitySelect = $('select.form-control#entity');
        var $parameterSelect = $('select.form-control#parameter');
        var selectValues = {
            "stops": {
                "bbox": "",
                "hello": "",
            },
            "operators": {
                "hello": "",
                "name": "",
            }
        };

        if($entitySelect.val() != "operators") {
            $(".form-control#operator-name").hide();
        }

        $parameterSelect.empty().append(function() {
            var output = '';
            $.each(selectValues[$entitySelect.val()], function(key, value) {
                output += '<option>' + key + '</option>';
            });
            return output;
        });
    },
    
    changeName: function() {
        var $parameterSelect = $('select.form-control#parameter');
        var $nameSelect = $('select.form-control#operator-name');
        // populate selectName using operators API endpoint
        // operators faked API endpoint: http://localhost:4567/api/v1/operators.json
        var selectName = {
            "name": {
                "Muni": "",
                "BART": "",
            }
        };

        if($parameterSelect.val() == "name") {
            $(".form-control#operator-name").show();
        } else {
            $(".form-control#operator-name").hide();
        }

    
        $nameSelect.empty().append(function() {
            var output = '';
            $.each(selectName[$parameterSelect.val()], function(key, value) {
                output += '<option>' + key + '</option>';
            });
            return output;
        });
    },

    submit: function() {
        var $entitySelect = $('select.form-control#entity');
        var $parameterSelect = $('select.form-control#parameter');
        var $nameSelect = $('select.form-control#operator-name');
        if($parameterSelect.val() == "bbox") {
            this.mapview.render();
            // temporary functionality to get stop model working, bbox input not implemented
            // use map extent for bbox instead of requiring user to draw bbox
            this.stops.setQueryParameters({
                    url: 'http://localhost:4567/api/v1/stops.json?bbox=-122.39893913269043,37.76651662158726,-122.38070011138915,37.77178331201861'
                });
                this.stops.fetch();
                // DeveloperPlayground.startQueryBuilderView.stops.models[0].attributes.geometry.coordinates

        } else if($parameterSelect.val() == "hello") {
            alert("please select a different parameter");
        } else if ($parameterSelect.val() == "name") {
            if ($entitySelect.val() == 'operators') {
                this.operators.setQueryParameters({
                    identifier: $nameSelect.val()
                });
                this.operators.fetch();
                // DeveloperPlayground.startQueryBuilderView.operators.first().attributes.identifiers[0]
            }
        } else {
            alert("please select a parameter");
        }
    }

});