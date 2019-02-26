/*document.addEventListener("DOMContentLoaded", function(){
    console.log("dom ok"); 
});*/

$(function () {
    //console.log("domOK");

    //header
    var $nav = $('.nav');
    $(window).scroll(function () {
        var $scroll = $(window).scrollTop();
        var $width = $(window).width();
        var $header = $('.header');

        if (($scroll) >= 20 && ($width) > 767) {
            $nav.addClass('nav--transition');
        } else {
            $nav.removeClass('nav--transition');
        }

        if (($scroll) >= 20) {
            $header.css({
                "background-color": "white",
                "transition": "0.3s"})
        } else {
            $header.css("background-color", "rgba(255,255,255, 0.6)");
        }
    });

    //cake background in main gallery
    /* $('.gallery__wrapper-item').mouseenter(function () {
         //console.log("tak");
         $(this).find('.gallery__item-text').css({
             "visibility": "visible"
         });
     });
     $('.gallery__wrapper-item').mouseleave(function () {
         //console.log("tak");
         $(this).find('.gallery__item-text').css({
             "visibility": "hidden"
         });
     });*/

    //cake background in main gallery

    var $galleryItem = $('.gallery__wrapper-item');

    $galleryItem.mouseenter(function () {
        $(this).addClass('gallery__wrapper-item--activ')
    });
    $galleryItem.mouseleave(function () {
        $(this).removeClass('gallery__wrapper-item--activ')
    });


    //smooth scroll  
    var $smooth = $('.footer__smooth-up');
    $smooth.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    //hamburger menu
    var $hamburger = $('.nav__mobile-link');
    var $nav = $('.nav');
    var $header = $('.header');
    $hamburger.on('click', function () {
        $nav.toggleClass('nav--open');
        $header.toggleClass('header--open');
    })


});
