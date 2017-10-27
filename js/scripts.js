$(document).ready(function () {

    // SCROLL CLASS CHANGE
    var nav = document.getElementById("nav");

    window.onscroll = function myFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            nav.classList.add("nav-small");
            nav.classList.add("bg-dark");
            nav.classList.remove("nav-big");
        } else {
            nav.classList.add("nav-big");
            nav.classList.remove("nav-small");
            nav.classList.remove("bg-dark");
        }
    };

    // SMOOTH SCROLLING

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
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
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 15, // 0
        mobile: true, // default
        live: false // true
    });
    wow.init();

    // PARALLAX

    $.fn.parallax = function (strength) {
        var scroll_top = $(window).scrollTop();
        var move_value = Math.round(scroll_top * strength);
        this.css('background-position', '0 -' + move_value + 'px');
    };
    $(window).on('scroll', function () {
        $('section#top').parallax(0.5);
    });
});
