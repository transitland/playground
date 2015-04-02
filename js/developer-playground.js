$(document).ready(function () {
	$(document).ajaxStart(function() {
		 $("#loading").removeClass("hide");
     $(".btn-default").addClass("btn-inactive");
	});
	$(document).ajaxComplete(function(event, request, settings) {
		// stop spinner, add style here
    $("#loading").addClass("hide");
    $(".btn-default").removeClass("btn-inactive");

	});
    DeveloperPlayground.startQueryBuilderView = new DeveloperPlayground.StartQueryBuilderView();
    if($(document).innerWidth() > 768){
      fixNavigation();
    $(window).scroll(function(){
       fixNavigation();
      });
    }
});
