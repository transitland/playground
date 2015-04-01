$(document).ready(function () {
	$(document).ajaxStart(function() {
		// start spinner, add style here
		console.log("Start spinner here");
	})
	$(document).ajaxComplete(function(event, request, settings) {
		// stop spinner, add style here
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
