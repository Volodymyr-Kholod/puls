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

// Modal

$('[data-modal=consultation]').on('click', function(){
  $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function(){
  $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
})
$('.button_mini').each(function(i) {
  $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
  });

});

  // Validate

function valideForms(form) {
  $(form).validate({
  rules: {
    name: {
      required: true,
      minlength: 2
    },
    phone: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: {
      required: "Введіть коректне ім'я",
      minlength: jQuery.validator.format("Введіть {0} символи")
  },
    email: {
      email: "Неправильно ввдений email",
      required: "Введіть коректний email"
    },
    phone: "Введіть коректний номер телефону"
  }
});
}

valideForms('#consultation form');
valideForms('#order form');
valideForms('#consultation-form');

//Phonemask
$('input[name=phone').mask("+3 (999) 999-99-99");

  