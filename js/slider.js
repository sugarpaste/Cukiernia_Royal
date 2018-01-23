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
           infinite: true,

           responsive: [
               {
                   breakpoint: 1000,
                   settings: {
                       slidesToShow: 3,
                       //slidesToScroll: 3,
                   }
    },
               {
                   breakpoint: 767,
                   settings: {
                       slidesToShow: 2
                   }
    },
               {
                   breakpoint: 480,
                   settings: {
                       slidesToShow: 1
                   }
               }]
       });

   });
