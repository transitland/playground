$(document).ready(function () {
	$(document).ajaxStart(function() {
    console.log("ajaxStart");
		 $("#loading").removeClass("hide");
     $(".btn-default").addClass("btn-inactive");
	});
	$(document).ajaxComplete(function(event, request, settings) {
		// stop spinner, add style here
    console.log("ajaxComplete");
    $("#loading").addClass("hide");
    $(".btn-default").removeClass("btn-inactive");

	});
  var navDefault = $("#nav-menu-bar").offset().top - parseInt($("#nav-menu-bar").css('margin-top'));
    DeveloperPlayground.startQueryBuilderView = new DeveloperPlayground.StartQueryBuilderView();
    if($(document).innerWidth() > 768){
      fixNavigation(navDefault);
    $(window).scroll(function(){
       fixNavigation(navDefault);
      });
    }
});
