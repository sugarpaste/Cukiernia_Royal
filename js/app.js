/*document.addEventListener("DOMContentLoaded", function(){
    console.log("dom ok"); 
});*/

$(function () {
    //console.log("dom10");

    var $nav = $('.nav');

    $(window).scroll(function () {

        var $scroll = $(window).scrollTop();

        if (($scroll) >= 20) {
            $nav.addClass('nav--transition');

        } else {
            $nav.removeClass('nav--transition');
        }
    });

    $('.slider__content').slick({
        ltr: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2500,
        slidesToShow: 2,
        infinite: true
    
    });
});
