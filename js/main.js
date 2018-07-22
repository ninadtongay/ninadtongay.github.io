/* Theme Name: Verny - Material Design Personal Template
   Author:Krish
   Author e-mail: themesbykrish@gmail.com
   Version: 1.0
   Created: March 2015
   File Description:Main JS file of the template
*/

/* ==============================================
1. Page Preloader
=============================================== */
$(window).load(function() {
	$(".loader").delay(300).fadeOut();
	$(".animationload").delay(600).fadeOut("slow");
});

/* ================================================
2. parallax
================================================ */
$(window).stellar({
    horizontalScrolling: false,
    responsive: true,
     scrollProperty: 'scroll',
     parallaxElements: false,
     horizontalScrolling: false,
     horizontalOffset: 0,
     verticalOffset: 0
});
/* ==============================================
3.Owl carousel for testimonials
=============================================== */
$(document).ready(function() {
    $("#testi-carousel").owlCarousel({
        // Most important owl features
        items: 1,
        singleItem: true,
        startDragging: true,
        autoPlay: true
    });
});

/* ==============================================
4.Navbar-Scroll
=============================================== */
//transperent nav
$(window).scroll(function() {
    if ($(".navbar").offset().top > 1) {
        $(".navbar-fixed-top").addClass("navbar-bg");
    } else {
        $(".navbar-fixed-top").removeClass("navbar-bg");
    }
});

/* ==============================================
5.Smooth Scroll To Anchor
=============================================== */
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* ==============================================
6.NiceScroll
=============================================== */
jQuery("html").niceScroll({
    scrollspeed: 50,
    mousescrollstep: 38,
    cursorwidth: 7,
    cursorborder: 0,
    cursorcolor: '#757575',
    autohidemode: false,
    zindex: 9999999,
    horizrailenabled: false,
    cursorborderradius: 0
});
/* ==============================================
7. WOW plugin triggers animate.css on scroll
=============================================== */
jQuery(document).ready(function () {
    wow = new WOW(
        {
            animateClass: 'animated',
            offset: 100,
            mobile: true
        }
    );
    wow.init();
});
/* ==============================================
8. Magnific Popup
=============================================== */
$(window).load(function(){
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.portfolioFilter a').click(function(){
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        }); 
    });

    $('.field-popup').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });


/* ===============================================
9. Contact Form
================================================= */
/*global jQuery */
/*
jQuery(function ($) {
    'use strict';
*/

    /**
     * Contact Form Application
     */


     /*
    var ContactFormApp = {
        $contactForm: $("#contactForm"),
        $contactFormBtn: $("#send"),
        $contactFormName: $("#name2"),
        $contactFormSubject: $("#subject2"),
        $contactFormEmail: $("#email2"),
        $contactFormMessage: $("#message2"),
        $confirmMessage: $("#ajaxsuccess"),
        $errorMessages: $(".error"),
        $errorName: $("#err-name"),
        $errorSubject: $("#err-subject"),
        $errorEmail: $("#err-emailvld"),
        $errorMessage: $("#err-message"),
        $errorForm: $("#err-form"),
        $errorTimeout: $("#err-timedout"),
        $errorState: $("#err-state"),

        //Validate Contact Us Data
        validate: function () {
            var error = false; // we will set this true if the form isn't valid

            var name = this.$contactFormName.val(); // get the value of the input field
            if(name == "" || name == " " || name == "Name") {
                this.$errorName.show(500);
                this.$errorName.delay(4000);
                this.$errorName.animate({
                    height: 'toggle'  
                }, 500, function() {
                    // Animation complete.
                }); 
                error = true; // change the error state to true
            }

            var subject = this.$contactFormSubject.val(); // get the value of the input field
            if(subject == "" || subject == " " || subject == "Subject") {
                this.$errorSubject.show(500);
                this.$errorSubject.delay(4000);
                this.$errorSubject.animate({
                    height: 'toggle'  
                }, 500, function() {
                    // Animation complete.
                }); 
                error = true; // change the error state to true
            }


            var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
            var email = this.$contactFormEmail.val().toLowerCase(); // get the value of the input field

            if (email == "" || email == " " || email == "E-mail") { // check if the field is empty
                this.$errorEmail.show(500);
                this.$errorEmail.delay(4000);
                this.$errorEmail.animate({
                    height: 'toggle'  
                }, 500, function() {
                    // Animation complete.
                });         
                error = true;
            }
            else if (!email_compare.test(email)) { // if it's not empty check the format against our email_compare variable
                this.$errorEmail.show(500);
                this.$errorEmail.delay(4000);
                this.$errorEmail.animate({
                    height: 'toggle'  
                }, 500, function() {
                    // Animation complete.
                });         
                error = true;
            }

            var message = this.$contactFormMessage.val(); // get the value of the input field
            
            if(message == "" || message == " " || message == "Message") {              
                this.$errorMessage.show(500);
                this.$errorMessage.delay(4000);
                this.$errorMessage.animate({
                    height: 'toggle'  
                }, 500, function() {
                    // Animation complete.
                });            
                error = true; // change the error state to true
            }

            if(error == true) {
                this.$errorForm.show(500);
                this.$errorForm.delay(4000);
                this.$errorForm.animate({
                    height: 'toggle'  
                }, 500, function() {
                    // Animation complete.
                }); 
            }

            return error;
        },
        //contact form submit handler
        contactFormSubmit: function (obj) {
            this.$errorMessages.fadeOut('slow'); // reset the error messages (hides them)

            if(this.validate() == false) {

                var data_string = $('#contactForm').serialize(); // Collect data from form

                var $this = this;
                $.ajax({
                    type: "POST",
                    url: $this.$contactForm.attr('action'),
                    data: data_string,
                    timeout: 6000,
                    cache: false,
                    crossDomain: false,
                    error: function(request,error) {
                        if (error == "timeout") {
                            $this.$errorTimeout.slideDown('slow');
                        }
                        else {
                            $this.$errorState.slideDown('slow');
                            $this.$errorState.html('An error occurred: ' + error + '');
                        }
                    },
                    success: function() {
                        $this.$confirmMessage.show(500);
                        $this.$confirmMessage.delay(4000);
                        $this.$confirmMessage.animate({
                            height: 'toggle'  
                            }, 500, function() {
                        });    
                        
                        $this.$contactFormName.val('');
                        $this.$contactFormEmail.val('');
                        $this.$contactFormMessage.val('');
                        $this.$contactFormSubject.val('');
                    }
                });
            }
            return false;
        },
        bindEvents: function () {
            //binding submit event
            this.$contactFormBtn.on('click', this.contactFormSubmit.bind(this));
        },
        init: function () {
            //initializing the contact form
            console.log('Contact form is initialized');
            this.bindEvents();
            return this;
        }
    };

    

    //Initializing the app
    ContactFormApp.init({});

});

*/
/* ==============================================
    10. Scroll to top
=============================================== */

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {    
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
}); 

$('.back-to-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});
/* ==============================================
    11. Skill bar
=============================================== */
$('.progress-bar').waypoint({
    handler: function() {
        $(this).each(function() {
            $(this).animate({
                width: $(this).attr('data-percent')
            }, 1000);
        });
    },
    offset: '95%'
});

