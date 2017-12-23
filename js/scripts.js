/*global $, document, window, location, wow, WOW */

$(document).ready(function () {

    // SCROLL CLASS CHANGE
    var nav = document.getElementById("nav");

    window.onscroll = function myFunction() {
        var distanceToTop = document.documentElement.scrollTop;
        
        if (distanceToTop > 100 && nav.classList.contains("nav-big")) {
            nav.classList.add("nav-small");
            nav.classList.add("bg-dark");
            nav.classList.remove("nav-big");
        } else if (distanceToTop < 100 & nav.classList.contains("nav-small")) {
            nav.classList.add("nav-big");
            nav.classList.remove("nav-small");
            nav.classList.remove("bg-dark");
        }
    };

    // SMOOTH SCROLLING

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 900);
                    return false;
                }
            }
        });
    });

    // WOW

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        live: false
    });
    wow.init();

    // PARALLAX

    /*$.fn.parallax = function () {
        var scroll_top = $(window).scrollTop(),
            move_value = Math.round(scroll_top * 0.5),
            scroll_value = (scroll_top / 500).toFixed(2),
            opacity = 1 - scroll_value,
            scale = 1 - scroll_value / 10;
        this.css('transform', 'translate3d(' + 0 + 'px, ' + move_value + 'px, 0)');
        $(".jumbotron").css({
            'opacity': opacity,
            'transform': 'scale(' + scale + ')'
        });
    };

    $(window).on('scroll', function () {
        $('section#top').parallax();
    });

    $('section#top').parallax();*/


});
