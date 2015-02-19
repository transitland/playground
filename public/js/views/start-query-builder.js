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

    // set up separate function to show/hide name menu on change to entity and parameter form controls

    submit: function(){
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

    // if parameter is changed to name, display name select menu
    // if name is selected from name select menu upon submit button click, generate URL
    // 
    

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

        $(".form-control#operator-name").show();

    
        $nameSelect.empty().append(function() {
            var output = '';
            $.each(selectName[$parameterSelect.val()], function(key, value) {
                output += '<option>' + key + '</option>';
            });
            return output;
        });
    }
});