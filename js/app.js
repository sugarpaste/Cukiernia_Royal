/*document.addEventListener("DOMContentLoaded", function(){
    console.log("dom ok"); 
});*/

$(function () {
    //console.log("domOK");
    
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
        slidesToShow: 3,
        infinite: true
    });
      
//smooth scroll    
    $('.footer__smooth-up').on('click', function(e){
    e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 1000);
	});
    
//cake background
   /* var $box = ('.gallery__wrapper-item');
    var $text = ('.gallery__item-text');
    $box.mouseenter( function(){
        console.log("tak");
        $text.addClass('gallery__item-text--activ');    
    })*/
    
});
