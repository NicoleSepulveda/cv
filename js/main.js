/* =======================================================
    Theme Name: CV
    Version: 1
    Author: Nicole Sepulveda
    Email: nsjdesarrollos@gmail.com
    Developed By: Nicole Sepulveda
    First Release: 1 June 2019
    Author URL: www.linkedin.com/in/nsjdesarrollos/
=============================================================

   JS Index  
    01.   Preloader For Hide loader
    02.   Section: HEADER
    03.   section: NAVBAR
    04.   section: ABOUT ME
    05.   section: SKILLS
    06.   Section: WORK EXPERIENCE
    07.   Section: PORTFOLIO
    08.   Scroll Top
======================================================= */

// ========================================================================= 
//  01.   PRELOADER
// ========================================================================= 


  if ((".loader").length) {
    // show Preloader until the website ist loaded
    $(window).on('load', function () {
      $(".loader").fadeOut("fast");
    });
  }




$(document).ready(function() {

  'use strict';


  // ========================================================================= 
  //  02.   section: HEADER
  // ========================================================================= 
    
    // Typed Js ------------------------------------------------------------------------------------ 
      // Este plugin se utiliza para dar efecto de las letras que se escriben solas en la seccion HEADER 
      var typed = $("#typed");

      $(function() {
        typed.typed({
          strings: [" Ingeniero.", "Programador.", "Desarrollador Web.", "Freelancer."],
          typeSpeed: 100,
          loop: true,
        });
      });



  // ========================================================================= 
  //  03.   Section: NAVBAR
  // ========================================================================= 

    // Sticky Js ------------------------------------------------------------------------------------------------ 
      // Este Js sirve para que el NAVBAR se quede fijo cuando el Scroll baja hasta cierto punto ( seccion NAVBAR)
      $(function(){
        $("#navigation").sticky({ topSpacing: 0 });
      });

    // jQuery Easing Js ------------------------------------------------------------------------------------------
      //jQuery for page scrolling feature - requires jQuery Easing plugin
      // este plugin se utiliza para dar efecto al scroll cuando se presiona una opcion de la seccion NAVBAR
      $(function() {
        $('.navbar-nav li a').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
        });
        $('.page-scroll a').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
        });
      });     


  
  
  // ========================================================================= 
  //  04.   Section: ABOUT ME
  // ========================================================================= 

    function getEdad() {
      let fechaNacimiento = new Date('03/04/1993');
      let ahora = new Date();
      let edadActual = ahora.getFullYear() - fechaNacimiento.getFullYear();
      document.getElementById("edad").innerHTML = edadActual;
    }
    getEdad(); 


  
  // ========================================================================= 
  //  05.   section: SKILLS
  // ========================================================================= 
    // waypoints Js --------------------------------------------------------------
      //jQuery for effect of the progress bar
      $('#section-skills').waypoint(function() {
        $('.progress .progress-bar').each(function() {
          $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
      }, { offset: '80%'} );     



  //===========================================================================
  //   06.   Section: WORK EXPERIENCE
  //============================================================================
    // owlCarousel2 Js -----------------------------------------------------------------------  
    /*este Jquery sirve para que funcione el carousel que se ve en la seccion: Experience*/
      $('.experience_item ').owlCarousel({
       loop: true,
       autoplay: true,
       autoplayTimeout: 5000,
       margin: 0,
       nav: true,
       dots: false,
       navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
       responsive:{

          0:{
            items:1
          },
          600:{
            items:1
          },
          1024:{
            items:2
          },
          1200:{
            items:2
          }
        }
        
       });



  // ========================================================================= 
  //   07.   Section: PORTFOLIO
  // ========================================================================= 
    
    // imagesloaded Js e isotope JS------------------------------------------------------------------------------------------------ 
      // Estos JS sirven darle efecto a las imagenes dentro de la (seccion PORTFOLIO)
        $('.portfolio-area').imagesLoaded(function () {
          var grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
              // use outer width of grid-sizer for columnWidth
              columnWidth: '.grid-item'
            }
          })  
        

          $('.portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            grid.isotope({ filter: filterValue });
          });

          //for portfolio menu active class
          $('.portfolio-menu button').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
          });
        });
   


  // ========================================================================= 
  //    08.   Scroll Top (FLECHA para llegar al home)
  // ========================================================================= 
      /*jQuery for Back to top button*/
      /*este Jquery sirve para hacer que la flecha que se ubica en la esquina inferior derecha tenga el efecto 
      de aparecer o desaparecer cuando el scroll esta en cierta posicion y tambien el efecto de subida hasta la seccion principal*/
      var scrollSpeed = 500; // how slow / fast you want the button to scroll to top.
      $(window).scroll(function(){
       if($(window).scrollTop() > 200){
        $("#back-to-top").addClass('visible');
       } else {
        $("#back-to-top").removeClass('visible');
       }
      });

      $('#back-to-top').on('click', function(){
       $('html, body').animate({scrollTop:0}, scrollSpeed);
       return false;
      }); 

}); //fin del JS
