$(document).ready(function () {
    DeveloperPlayground.startQueryBuilderView = new DeveloperPlayground.StartQueryBuilderView();
    if($(document).innerWidth() > 768){
      console.log("hellow");
      fixNavigation();
    $(window).scroll(function(){
       fixNavigation();
      });
    }
});
