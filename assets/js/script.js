/*=================================================================

[Table of Content]

01: Background image
02: Menu
03: Preloader
04: Scroll to top button
05: Sticky menu
06: Venobox video play
07: Project image show
08: Project filtering
09: client slider
10: footer time slider
11: counterup
12: scroll animation
13: scroll number animation
 
====================================================================*/

$(function(){
    "use strict";
    
    /*=====================================================================
        01: Background image
    ======================================================================*/
   let imageTarget = $('[data-img]');
   imageTarget.css('background', function(){
       return 'url('+this.getAttribute('data-img')+') no-repeat center'
   });
   imageTarget.css('backgroundSize', 'cover');

    /*=====================================================================
        02: Menu
    ======================================================================*/
    $('.header-menu a[href="#"]').on("click", function (e) {
        e.preventDefault();
    });

    $(".header-menu").menumaker({ title: '<i class="fas fa-bars"></i>', format: "multitoggle" });

    /*================================================================
      03: Preloader
    =================================================================*/
    $(window).on('load', function() { // Use 'load' event for full content loading
        setTimeout(() => {
          $('.preloader').fadeOut();
        }, 250);
      });      

    /*=====================================================================
        04: Scroll to top button
    =======================================================================*/
    $('.top-btn').on('click',function(){
        $('html').animate({
            scrollTop: 0
        },1000);
    });

    
    $(window).on('scroll',function(){
        var $scroll = $(this).scrollTop();

        if($scroll > 300){
            $('.top-btn').addClass('show');
        }else{
            $('.top-btn').removeClass('show');
        }
    });

    /*=====================================================================
        05: Sticky menu
    ======================================================================*/
    function menuSticky (){
        var $scroll = $(window).scrollTop();
        if($scroll > 120){
            $('.menubar').addClass('sticky');
        }else{
            $('.menubar').removeClass('sticky');
        }
     }
     menuSticky ()
     $(window).on('scroll',function(){
        menuSticky ()

    });

   /*=====================================================================
        06: Venobox video play
    ======================================================================*/
    $('.venobox').venobox();

    /*======================================================================
        07: Project image show
    =======================================================================*/

    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });

      /*=====================================================================
        08: Project filtering
    ======================================================================*/
    let mixer =  document.querySelector('.filters');
    if(mixer){
        mixitup('.filters',{
            selectors: {
                control: '[data-mixitup-control]'
            }
        })
    }


        $('.project-menu li').click(function(event){
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /*=====================================================================
        09: client slider
    ======================================================================*/
    var clientSwiper = new Swiper('.client-slider', {
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 30,
        autoPlay: 3000,
        breakpoints: {
            1920: {
            slidesPerView: 1,
            },
            992: {
            slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        controller: {
            control: clientImgSwiper,
          },
        // navigation: {
        //     nextEl: ".client-button-next",
        //     prevEl: ".client-button-prev",
            
        //   },
    });
    var clientImgSwiper = new Swiper('.client-img-slider', {
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 30,
        autoPlay: 3000,
        breakpoints: {
            1920: {
            slidesPerView: 1,
            },
            992: {
            slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        controller: {
            control: clientSwiper,
          },
        navigation: {
            nextEl: ".client-button-next",
            prevEl: ".client-button-prev",
            
          },       
    });

    /*=====================================================================
        10: footer time slider
    ======================================================================*/
    var swiper = new Swiper('.time-slider', {
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 30,
        autoPlay: 3000,
        breakpoints: {
            1920: {
            slidesPerView: 1,
            },
            992: {
            slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
    });

    /*=====================================================================
        11: counterup
    ======================================================================*/
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    /*=====================================================================
        12: scroll animation
    ======================================================================*/
    
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true,
        scrollContainer: null
    });
    wow.init();    

    /*=====================================================================
        13: scroll number animation
    ======================================================================*/
      $(window).scroll(function() {
        $('.start-count1').each(function() {
          var $this = $(this);
          var counter = $this.offset().top;
          var windowTop = $(window).scrollTop();
      
          if (windowTop > counter - 400) {
            if (!$this.hasClass('animated')) {
              $this.addClass('animated');
              jQuery({ Counter: 0 }).animate({ Counter: 200 }, {
                duration: 1500,
                easing: 'swing',
                step: function() {
                  $this.text(Math.ceil(this.Counter));
                },
                complete: function() {
                  // Remove the 'animated' class after completion to allow reloading
                  $this.removeClass('animated');
                }
              });
            }
          }
        });
      });

      $(window).scroll(function() {
        $('.start-count2').each(function() {
          var $this = $(this);
          var counter = $this.offset().top;
          var windowTop = $(window).scrollTop();
      
          if (windowTop > counter - 400) {
            if (!$this.hasClass('animated')) {
              $this.addClass('animated');
              jQuery({ Counter: 0 }).animate({ Counter: 1200 }, {
                duration: 1500,
                easing: 'swing',
                step: function() {
                  $this.text(Math.ceil(this.Counter));
                },
                complete: function() {
                  // Remove the 'animated' class after completion to allow reloading
                  $this.removeClass('animated');
                }
              });
            }
          }
        });
      });
      
      $(window).scroll(function() {
        $('.start-count3').each(function() {
          var $this = $(this);
          var counter = $this.offset().top;
          var windowTop = $(window).scrollTop();
      
          if (windowTop > counter - 400) {
            if (!$this.hasClass('animated')) {
              $this.addClass('animated');
              jQuery({ Counter: 0 }).animate({ Counter: 130 }, {
                duration: 1500,
                easing: 'swing',
                step: function() {
                  $this.text(Math.ceil(this.Counter));
                },
                complete: function() {
                  // Remove the 'animated' class after completion to allow reloading
                  $this.removeClass('animated');
                }
              });
            }
          }
        });
      });

      $(window).scroll(function() {
        $('.start-count4').each(function() {
          var $this = $(this);
          var counter = $this.offset().top;
          var windowTop = $(window).scrollTop();
      
          if (windowTop > counter - 400) {
            if (!$this.hasClass('animated')) {
              $this.addClass('animated');
              jQuery({ Counter: 0 }).animate({ Counter: 50 }, {
                duration: 1500,
                easing: 'swing',
                step: function() {
                  $this.text(Math.ceil(this.Counter));
                },
                complete: function() {
                  // Remove the 'animated' class after completion to allow reloading
                  $this.removeClass('animated');
                }
              });
            }
          }
        });
      });
});