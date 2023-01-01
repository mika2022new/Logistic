$(document).ready(function() {


/* navToggle on mobile
=============================================================*/


        let navToggle = $('#navToggle');
        let nav = $('#nav');



        navToggle.on('click', function(event) {

            event.preventDefault();

            $("body").toggleClass('show-nav');

            nav.toggleClass('show');


        })

       $(window).on("resize", function() {

            $("body").removeClass('show-nav');

            nav.removeClass('show');  
        });    


        let header = $("#header");
        let headerHeight = header.innerHeight();
        let intro = $("#intro");
        let introHeight = intro.innerHeight();   
        //let introHeight = intro.height();                                 // Bez ucheta "Padding" //

        let scrollPosition = $(window).scrollTop();




/* Header class on Scroll
=============================================================*/

        headerScroll();

        $(window).on("scroll resize", function() {
            headerScroll();        
        });


        function headerScroll() {    

            headerHeight = header.innerHeight();                
            introHeight = intro.innerHeight();

            // console.log(introHeight);

            let scrollPosition = $(this).scrollTop();

            if (scrollPosition >= (introHeight - headerHeight)) {

                header.addClass("header--dark");

            } else {

                header.removeClass("header--dark");
            }
        }


/* Smooth Scroll to sections
=============================================================*/    

        $("[data-scroll]").on("click", function(event) {

            event.preventDefault();

            let scrollElement = $(this).data("scroll");

            let elementPosition = $(scrollElement).offset().top;


            $("html, body").animate({

                scrollTop: elementPosition - headerHeight

            }, 500);


            $("body").removeClass('show-nav');

            nav.toggleClass('show');


            console.log(scrollElement);

            console.log(elementPosition);

        });



/* ScrollSpy
=============================================================*/


        let windowH = $(window).height();

    //    console.log("windowH", windowH);

        scrollSpy(scrollPosition);


        $(window).on("scroll", function() {

            scrollPosition = $(this).scrollTop();

            scrollSpy(scrollPosition);

        });


        function scrollSpy(scrollPosition) {

            $("[data-scrollspy]").each(function() {

                let $this = $(this);

                let sectionId = $this.data('scrollspy');

                let sectionOffset = $this.offset().top;          


                if(scrollPosition >= (sectionOffset - 100)) {

                    $('#nav [data-scroll]').removeClass('active');

                    $('#nav [data-scroll="' + sectionId + '"]').addClass('active')
                }

                if(scrollPosition <= 50) {

                    $('#nav [data-scroll]').removeClass('active');

                }

             });    

        }


/* Header class on Scroll
=============================================================*/


        /* ---- Open ---- */

        $('[data-modal]').on('click', function(event) {

            event.preventDefault();

            let modalTag = $(this).data('modal');

    //        console.log(modalTag);

            $('body').addClass('no-scroll');

            $(modalTag).addClass('show');

            setTimeout(function() {

                $(modalTag).find('.modal_inner').css({

    //                transform: 'translateY(0)',
                    transform: 'scale(1)',

                    opacity: '1'
                });            
            }, 100);

        });


        /* ---- Close ---- */


        $('[data-modal-close]').on('click', function(event) {

            event.preventDefault();

            let modal = $(this).parents('.modal');

            modalClose(modal);


        });


        $('.modal').on('click', function(event) {

            event.preventDefault();    

            let modal = $(this);

            modalClose(modal);


        });


        $('.modal_inner').on('click', function(event) {

            event.stopPropagation();
        });



        function modalClose(modal) {

            $(modal).find('.modal_inner').css({

    //                transform: 'translateY(0)',
                transform: 'scale(0.5)',

                opacity: '0'
            });

            setTimeout(function() { 

            $('body').removeClass('no-scroll');

            $(modal).removeClass('show');

            }, 300);     
        }



/* Slick Slider (kenwheeler.github.io/slick)
=============================================================*/


        /*           Intro Slider
        ------------==============-------------*/

    let introSlider = $("#introSlider");

    introSlider.slick({

        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2500

    });


    $('#introSliderPrev').on('click', function() {

        introSlider.slick('slickPrev')    
    });

    $('#introSliderNext').on('click', function() {

        introSlider.slick('slickNext')    
    });

        /*           Reviews Slider
        ------------==============-------------*/

    let reviewsSlider = $("#reviewsSlider");

    reviewsSlider.slick({

        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,

        arrows: false,
        
        autoplay: true,
        autoplaySpeed: 4000,        
        speed: 500

    });
    
   
    
/* AOS.js (https://github.com/michalsnik/aos)
=============================================================*/    
    
//        AOS.init();
    // You can also pass an optional settings object
    // below listed default settings
    
    
    AOS.init({
      // Global settings:
      disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    
});















