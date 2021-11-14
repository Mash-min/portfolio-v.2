$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 15,
    center: false,
    dotsEach: true,
    dots: true,
    center: true,
    responsive: {
      0:{
          items:1,
      },
      600:{
          items: 2,
      },
      1000:{
          items:1.8,
      }
    }
});

AOS.init()