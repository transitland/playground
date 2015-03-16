var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.StartQueryBuilderView = Backbone.View.extend({
    el: "#developer-playground",

    template: _.template($('#playground-template').html()),


    events: {
        'change .form-control#entity': 'changeParam',
        'change .form-control#parameter': 'changeName',
        'click .btn' : 'submit',
        // 'click #map-view' : 'getBounds'
    },


    initialize: function () {
        this.operators = new DeveloperPlayground.Operators();
        this.stops = new DeveloperPlayground.Stops();
        this.render();
    },

    render: function() {
        this.$el.html(this.template());
        $(".form-control#operator-name").hide();
        this.mapview = new DeveloperPlayground.MapView();
        this.mapview.render();
        return this;
    },

    changeParam: function() {
        var $entitySelect = $('select.form-control#entity');
        var $parameterSelect = $('select.form-control#parameter');
        var selectValues = {
            "stops": {
                "": "",
                "map view": "",
                "city": "",
                "radius from a point": "",
            },
            "operators": {
                "": "",
                "map view": "",
                "city": "",
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
        var bounds=this.mapview.getBounds();
        var collection;

        // FOR STOP QUERIES

        if ($entitySelect.val() == "stops") {
            collection = this.stops;
            // for search by map view
            if($parameterSelect.val() == "map view") {
            this.stops.setQueryParameters({
                    url: 'http://localhost:4567/api/v1/'+$entitySelect.val()+'.json?bbox='+bounds
                });
            // for search by city
            } else if($parameterSelect.val() == "city") {
                alert("stops by city not yet functional");
            // for search by mode
            } else if($parameterSelect.val() == "mode") {
                alert("stops by mode not yet functional");
            }
        // FOR OPERATOR QUERIES
        } else if ($entitySelect.val() == "operators") {
            collection = this.operators;
            if($parameterSelect.val() == "map view") {
                this.operators.setQueryParameters({
                    identifier: $nameSelect.val()
                });
            } else if($parameterSelect.val() == "city") {
                alert("operators by city not yet functional");
            // for search by mode
            } else if($parameterSelect.val() == "mode") {
                alert("operators by mode not yet functional");
            }
        //  FOR ROUTE QUERIES
        } else if ($entitySelect.val() == "routes") {
            collection = this.routes;
            if($parameterSelect.val() == "map view") {
                alert("routes by map view not yet functional");
            } else if($parameterSelect.val() == "city") {
                alert("routes by city not yet functional");
            // for search by mode
            } else if($parameterSelect.val() == "mode") {
                alert("routes by mode not yet functional");
            }
        } else {
            alert("please select a parameter");
        }

        collection.fetch();

        this.mapview.setCollection({collection: collection});
        this.mapview.featuregroup.clearLayers();
        this.mapview.initialize({collection: collection});

        if ('undefined' !== typeof this.tableview) this.tableview.close();

        this.tableview = new DeveloperPlayground.TableView({collection: collection});
        this.headerView = new DeveloperPlayground.HeaderView({collection: collection});

    },


});