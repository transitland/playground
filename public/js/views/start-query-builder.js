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
        this.render();
    },
    
    render: function() {
        this.$el.html(this.template());
        $(".form-control#operator-name").hide();
        // this.$("#table-view").append(this.tableview.render().el);
        return this;
    },

    // if name is selected from name select menu upon submit button click, generate URL

    submit: function() {
        var $entitySelect = $('select.form-control#entity');
        var $parameterSelect = $('select.form-control#parameter');
        var $nameSelect = $('select.form-control#operator-name');
        if($parameterSelect.val() == "bbox") {
            this.mapview.render();
        } else if($parameterSelect.val() == "hello") {
            alert($parameterSelect.val());
        } else if ($parameterSelect.val() == "name") {
            console.log($entitySelect.val(),$parameterSelect.val(),$nameSelect.val());
            //generateURL($entitySelect.val(),$parameterSelect.val(),$nameSelect.val());
        } else {
            alert("nope");
        }
    },

    changeParam: function() {
        var $entitySelect = $('select.form-control#entity');
        var $parameterSelect = $('select.form-control#parameter');
        var selectValues = {
            "stops": {
                "bbox": "",
                "hello": "",
            },
            "operator": {
                "hello": "",
                "name": "",
            }
        };

        console.log($parameterSelect.val());
        console.log('test');


        if($entitySelect.val() != "operator") {
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
    }
});