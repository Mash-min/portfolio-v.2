$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    center: true,
    dotsEach: true,
    dots: true,
    center: true,
    responsive: {
      0:{
          items:1.2,
      },
      600:{
          items: 2,
      },
      1000:{
          items:3,
      }
    }
});

AOS.init()