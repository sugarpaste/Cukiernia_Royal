   $(function () {
       //console.log("domOK"); 

       //slider
       var $slider = $('.slider__content');
       $slider.slick({
           ltr: true,
           autoplay: true,
           arrows: false,
           autoplaySpeed: 2500,
           slidesToShow: 3,
           infinite: true
       });

   });
