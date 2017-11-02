/*document.addEventListener("DOMContentLoaded", function(){
    console.log("dom ok"); 
});*/

$(function () {
    //console.log("dom10");
    
//header
    var $nav = $('.nav');

    $(window).scroll(function () {

        var $scroll = $(window).scrollTop();

        if (($scroll) >= 20) {
            $nav.addClass('nav--transition');

        } else {
            $nav.removeClass('nav--transition');
        }
    });
    
    
//slider
    $('.slider__content').slick({
        ltr: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2500,
        slidesToShow: 2,
        infinite: true
    });
    
    
//smooth scroll    
    $('.footer__smooth').on('click', function(e){
    e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 1000);
	});
});
