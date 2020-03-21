$(document).ready(function () {
    $('.menu-toggler').on('click',function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    $('nav a[href*="#"]').on('click', function () {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
            },2000);
    });
    $('#up').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });
    AOS.init({
        easing:'ease',
        duration:1800 ,
        once: true
    });
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementsByClassName("profile-img").removeAttribute("data-aos");
    }
}

var x = window.matchMedia("(max-width: 1024px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes