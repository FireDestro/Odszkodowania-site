$(document).ready(function () {
  var container = $(".toggle");
  let Login = $('.Login-BG');
  let fb = $('.fb');
  let accident = $('.accident-main-container');
  let logonav = $('.logo-nav');
  let loginabout = $('.Login-BG-about');
  let headerab = $('.header-container-about');
  let loginoffer = $('.Login-BG-offer');
  let headeroffer = $('.header-container-offer');
  let loginnews = $('.Login-BG-news');
  let headeraktu = $('.header-container-aktua');
  $(".agent").on('click', function(e){


     container.css("display", "flex");

     Login.css('background', "rgba(38,42,61, 0.8)");
     fb.css('z-index', '-1');
     accident.css('z-index', '-1');
     logonav.css('z-index', '-1');
     loginabout.css('background', "rgba(38,42,61, 0.8)");
     headerab.css('z-index', '-1');
     loginoffer.css('background', "rgba(38,42,61, 0.8)");
     headeroffer.css('z-index', '-1');
     loginnews.css('background', "rgba(38,42,61, 0.8)");
     headeraktu.css('z-index', '-1');
      e.stopPropagation();

  });
  $(".toggle").click(function(e){
    e.stopPropagation();
});



  $(document).click(function(){
   container.css("display", "none");
   Login.css("background", "none");
   fb.css('z-index', '0');
   accident.css('z-index', '0');
   logonav.css('z-index', '0');
   loginabout.css("background", "none");
   headerab.css('z-index', '0');
   loginoffer.css("background", "none");
   headeroffer.css('z-index', '0');
   loginnews.css("background", "none");
   headeraktu.css('z-index', '0');


});



});
