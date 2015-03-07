var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.StartQueryBuilderView = Backbone.View.extend({
    el: "#developer-playground",

    template: _.template($('#playground-template').html()),


    events: {
        'change .form-control#entity': 'changeParam',
        'change .form-control#parameter': 'changeName',
        'click .btn' : 'submit'
    },

    initialize: function () {
        this.operators = new DeveloperPlayground.Operators();
        this.stops = new DeveloperPlayground.Stops();
        this.render();
    },

    render: function() {
        this.$el.html(this.template());
        $(".form-control#operator-name").hide();
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
        var selectName = {
            "name": {
                "BART": "",
                "AC Transit": "",
                "Muni": "",
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
        var collection;
        if($parameterSelect.val() == "bbox") {
            // use map extent for bbox instead of requiring user to draw bbox
            this.stops.setQueryParameters({
                    url: 'http://localhost:4567/api/v1/stops.json?bbox=-122.39893913269043,37.76651662158726,-122.38070011138915,37.77178331201861'
                });
            collection = this.stops;
        } else if ($parameterSelect.val() == "name") {
            if ($entitySelect.val() == 'operators') {
                
                this.operators.setQueryParameters({
                    identifier: $nameSelect.val()
                });

                collection = this.operators;
            }
        } else if($parameterSelect.val() == "hello") {
            alert("please select a different parameter");
        } else {
            alert("please select a parameter");
        }
        collection.fetch();
        this.tableview = new DeveloperPlayground.TableView({collection: collection});
        if (!this.mapview) {
            this.mapview = new DeveloperPlayground.MapView({collection: collection});
        }
        this.tableview.render();
        this.mapview.render();
    }

});