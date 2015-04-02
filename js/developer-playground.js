$(document).ready(function () {
	$(document).ajaxStart(function() {
		 $("#loading").removeClass("hide");
		
	})
	$(document).ajaxComplete(function(event, request, settings) {
		// stop spinner, add style here
    $("#loading").addClass("hide");
		console.log("Stop spinner here");
	})
    DeveloperPlayground.startQueryBuilderView = new DeveloperPlayground.StartQueryBuilderView();
    if($(document).innerWidth() > 768){
      console.log("hellow");
      fixNavigation();
    $(window).scroll(function(){
       fixNavigation();
      });
    }
});
