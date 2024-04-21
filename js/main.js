(function ($) {
    "use strict";

  
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
 
    new WOW().init();



    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 45) {
    //         $('.nav-bar').addClass('sticky-top');
    //     } else {
    //         $('.nav-bar').removeClass('sticky-top');
    //     }
    // });
    
    
   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });



    // $(".header-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1500,
    //     items: 1,
    //     dots: true,
    //     loop: true,
    //     nav : true,
    //     navText : [
    //         '<i class="bi bi-chevron-left"></i>',
    //         '<i class="bi bi-chevron-right"></i>'
    //     ]
    // });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

// Crousal Script
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:true,
    animateOut: 'slideOutLeft',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});