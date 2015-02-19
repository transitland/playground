var DeveloperPlayground = DeveloperPlayground || {};

DeveloperPlayground.StartQueryBuilderView = Backbone.View.extend({
    el: "#developer-playground",

    template: _.template($('#playground-template').html()),

    events: {
        'change .form-control#entity': 'changeParam',
        'click .btn' : 'alert'

        // set up event to listen for submit button click, show mapview, tableview on click
        // query builder view should move to header on click (is this a separate view?)
        // 'onclick .submit-button': '(listView.$el.append(itemView.el;)'
    },

    initialize: function () {
        this.mapview = new DeveloperPlayground.MapView();
        // this.tableview = new DeveloperPlayground.TableView();
        this.render();
    },
    
    render: function() {
        this.$el.html(this.template());
        // this.mapview.render();
        // this.$("#table-view").append(this.tableview.render().el);
        return this;
    },

    alert: function(){
        var $entitySelect = $('select.form-control#entity');
        var $parameterSelect = $('select.form-control#parameter');
        if($parameterSelect.val() == "bbox") {
            this.mapview.render();
        } else if($parameterSelect.val() == "hello") {
            alert($parameterSelect.val());
        } else if ($parameterSelect.val() == "name") { alert("add text input functionality");
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