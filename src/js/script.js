// $(document).ready(function(){
// //     $('.carousel__inner').slick({
// //         speed: 1200,
// //         // adaptiveHeight: true,
// //         prevArrow: '<button type="button" class="slick-prev"><img src="img/roundabout/chevron-left-solid.png"></button>',
// //         nextArrow: '<button type="button" class="slick-next"><img src="img/roundabout/chevron-right-solid.png"></button>',
// //         responsive: [
// //             {
// //               breakpoint: 768,
// //               settings: {
// //                 slidesToShow: 3,
// //                 slidesToScroll: 3,
// //                 infinite: true,
// //                 dots: true
// //               }
// //             },
// //         ]
// //       });
// });

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  responsive: {

    575: {
      edgePadding: 10,
      autoWidth: true,
      touch: true
    },
    767: {
      gutter: 30,
      autoWidth:true
    },
    991: {
      items: 1,
      autoWidth:true
    }
  }

});

document.querySelector('.prev').onclick = function () {
  slider.goTo('prev');
}

document.querySelector('.next').onclick = function () {
  slider.goTo('next');
}


