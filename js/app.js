
function initMap() {
        var uluru = {lat: 53.017131, lng: 18.601967};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var iconBase = 'img/mapkaicon.png';
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: iconBase
        });
      }



      function showMobile(){
         console.log("dziala");

         let menu = $(".mobile-nav");
         let mobile = $(".mobile-main");
         let pomoc2 = $(".container-pomoc2");
         let mobileHead2 = $('.inner-mobile-header2 img');
         let mobileArrow = $('.mobile-arrow-dropdown');
         let mobileArrow2 = $('.mobile-arrow-dropdown2');
         let mobileArrow3 = $('.mobile-arrow-dropdown3');
         let mobileArrow4 = $('.mobile-arrow-dropdown4');
         let mobileArrow5 = $('.mobile-arrow-dropdown5');
         let mobileArrow6 = $('.mobile-arrow-dropdown6');
         let pomoc = $('#pomoc');
         let agentmobile = $('.agent-mobile');
         let strefalogowanie =$('.mobile-logowanie');
         let closestrefalog = $('.inner-mobile-strefa-logout img');
         // popup form
         let popupbtnform = $('.btn-form-send-query');
         let popupform = $('.container-send_formPop');
         let popupcross = $('.popup-cross img');

         let mobiledropefppO = $('.mobile-drop-efppO');
         let mobiledropefppC = $('.mobile-drop-efppC');
         let mobiledropefppOf = $('.mobile-drop-efppOf');
         let mobiledropefppCf = $('.mobile-drop-efppCf');
         let mobiledropefppOfi = $('.mobile-drop-efppOfi');
         let mobiledropefppCfi = $('.mobile-drop-efppCfi');

         let menu1 = $('.menu-option1');
         let menu2 = $('.menu-option2');
         let menu3 = $('.menu-option3');
         let opt1 = $('.first-opt');
         let opt2 = $('.sec-opt');
         let opt3 = $('.third-opt');
         let arrow2 = $('.arrowchange');
         let arrow3 = $('.arrowchange2');
         let arrow4 = $('.arrowchange4');
         let arrow5 = $('.arrowchange5');
         let arrow6 = $('.arrowchange6');
         let arrow7 = $('.arrowchange7');
         let dropchange = $('.ul-drop-change');
         let dropchange2 = $('.ul-drop-change2');
         let dropchange3 = $('.ul-drop-change3');

         // captcha space form
         let captchaDiv = $('.captcha-div');
         let captchaSpace1 = $('.form-control1');
         let captchaSpace2 = $('.style-select-input1');


         // force css to overrite flex
         dropchange.css('display', 'none');
         dropchange2.css('display', 'none');
         dropchange3.css('display', 'none');

         //  on click open mobile-menu navigation
         menu.on("click", function(event){
            event.preventDefault();
            mobile.css('display','flex');

         });
         // in click closing mobile-menu navigation
         mobileHead2.on('click', function(){
           mobile.css('display','none');

         });

         // on click menu mobile efpp div

         mobiledropefppO.on('click', function(){
           $('.toggle-down').css('display', 'none');
           $('.dropdown-mobile-efpp').css('display', 'flex');
         });
         mobiledropefppOf.on('click', function(){
           $('.toggle-down2').css('display', 'none');
           $('.dropdown-mobile-off').css('display', 'flex');
         });
         mobiledropefppOfi.on('click', function(){
           $('.toggle-down3').css('display', 'none');
           $('.dropdown-mobile-ofi').css('display', 'flex');
         });

         // on click menu mobile div close
         mobiledropefppC.on('click', function(){
           console.log('działa?');
           $('.toggle-down').css('display', 'flex');
           $('.dropdown-mobile-efpp').css('display', 'none');
         });
         mobiledropefppCf.on('click', function(){
           console.log('działa?');
           $('.toggle-down2').css('display', 'flex');
           $('.dropdown-mobile-off').css('display', 'none');
         });
         mobiledropefppCfi.on('click', function(){
           console.log('działa?');
           $('.toggle-down3').css('display', 'flex');
           $('.dropdown-mobile-ofi').css('display', 'none');
         });


         // on click open menu mobile Efpp section
         mobileArrow.on('click', function(){
           console.log('działa o firmie');
           $('.toggle-down').css('display', 'none');
           $('.dropdown-mobile-efpp').css('display', 'flex');
         });
         mobileArrow3.on('click', function(){
           console.log('działa oferta');
           $('.toggle-down2').css('display', 'none');
           $('.dropdown-mobile-off').css('display', 'flex');
         });
         mobileArrow5.on('click', function(){
           console.log('dziala efpp');
           $('.toggle-down3').css('display', 'none');
           $('.dropdown-mobile-ofi').css('display', 'flex');
         });

         // on click close menu mobile Efpp section
         mobileArrow2.on('click', function(){
           console.log('działa o firmie');
           $('.toggle-down').css('display', 'flex');
           $('.dropdown-mobile-efpp').css('display', 'none');
         });

         mobileArrow4.on('click', function () {
           console.log('działa oferta');
           $('.toggle-down2').css('display', 'flex');
           $('.dropdown-mobile-off').css('display', 'none');
         })

         mobileArrow6.on('click', function(){
           console.log('działa efpp');
           $('.toggle-down3').css('display', 'flex');
           $('.dropdown-mobile-ofi').css('display', 'none');
         });




         // on click open agennt log
         agentmobile.on('click', function(){
           mobile.css('display', 'none');
           strefalogowanie.css('display', 'flex');

         });
         // on click closing agent log
         closestrefalog.on('click', function(){
           mobile.css('display','flex');
            strefalogowanie.css('display','none');

         });
// -------------------------------------------------------->
         // on click open popup form

         popupbtnform.on('click', function(event){
           event.preventDefault();
           console.log("działa popup");
           popupform.css('display','block');


         });

         // on click close popup form


         popupcross.on('click', function(){
           popupform.css('display',"none");
         });



         // menu options
         // first
         opt1.on("mouseover", function(){
           console.log("dziala2?");
           dropchange.css('display', 'flex');
           menu1.css('background','#fff');
           $('.first-opt a').css('color','#262a3d');
           $('.first-opt a').css('font-weight','bold');
           arrow2.css('display', 'none');
           arrow3.css('display', 'flex');


         });
         opt1.on("mouseleave", function(){
           console.log("dziala2?");
           dropchange.css('display', 'none');
           menu1.css('background','none');
           $('.first-opt a').css('color','#fff');
           arrow2.css('display', 'flex');
           arrow3.css('display', 'none');

         });
         // sec
         opt2.on("mouseover", function(){
           console.log("dziala2?");
           dropchange2.css('display', 'flex');
           menu2.css('background','#fff');
           $('.sec-opt a').css('color','#262a3d');
           $('.sec-opt a').css('font-weight','bold');
           arrow4.css('display', 'none');
           arrow5.css('display', 'flex');


         });
         opt2.on("mouseleave", function(){
           console.log("dziala2?");
           dropchange2.css('display', 'none');
           menu2.css('background','none');
           $('.sec-opt a').css('color','#fff');
           arrow4.css('display', 'flex');
           arrow5.css('display', 'none');

         });
         // third
         opt3.on("mouseover", function(){
           console.log("dziala2?");
           dropchange3.css('display', 'flex');
           menu3.css('background','#fff');
           $('.third-opt a').css('color','#262a3d');
           $('.third-opt a').css('font-weight','bold');
           arrow6.css('display', 'none');
           arrow7.css('display', 'flex');


         });
         opt3.on("mouseleave", function(){
           console.log("dziala2?");
           dropchange3.css('display', 'none');
           menu3.css('background','none');
           $('.third-opt a').css('color','#fff');
           arrow6.css('display', 'flex');
           arrow7.css('display', 'none');

         });

         // on change show captcha div
        captchaSpace1.on('change', function(){
          console.log("Działa");
          captchaDiv.css('display', 'flex');
        });

        captchaSpace2.on('change', function(){
          captchaDiv.css('display', 'flex');
        });



       }
       showMobile();
