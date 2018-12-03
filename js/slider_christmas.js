   $(function () {
       //console.log("domOK"); 

       //slider
       var $slider = $('.slider__content');
       $slider.slick({
           ltr: true,
           autoplay: true,
           arrows: false,
           autoplaySpeed: 3000,
           slidesToShow: 1,
           infinite: true,

           responsive: [
               {
                   breakpoint: 1000,
                   settings: {
                       slidesToShow: 1,
                       //slidesToScroll: 3,
                   }
    },
               {
                   breakpoint: 767,
                   settings: {
                       slidesToShow: 1
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
