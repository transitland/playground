$(document).ready(function () {

   $(document).ajaxError(function(event, xhr, settings) {
      console.log("err err err");
      console.log(xhr.reponseText);
  });
    $(document).ajaxStart(function() {
		 $("#loading").removeClass("hide");
     $(".btn-default").addClass("btn-inactive");
	});
	$(document).ajaxComplete(function(event, request, settings) {
    $("#loading").addClass("hide");
    $(".btn-default").removeClass("btn-inactive");
	});

  $(document).click(function(){
    if(!$(".no-result").hasClass("hide"))$(".no-result").addClass("hide");
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
