$(document).ready(function(){

//hover effect product 
$('.list-1 .swiper-slide').hover(function(){
  $(this).toggleClass('effect');
  $(this).siblings().toggleClass('gray');
});

$('.list-2 .swiper-slide').hover(function(){
  $(this).toggleClass('effect');
  $(this).siblings().toggleClass('gray');
});

//scroll menu fixed top
$(function(){
  var menuTop = $('.header-menu').offset().top;
  $(window).on('scroll',function(){
    if($(window).scrollTop() > menuTop){
      $('.header-menu').addClass('is-fixed');
    }
    else{
      $('.header-menu').removeClass('is-fixed');
    }
  });
});


//scroll menu fixed breadcumbs
$(function(){
  var breadcrumb = $('.breadcrumb-nav').offset().top;
  $(window).on('scroll',function(){
    if($(window).scrollTop() > breadcrumb){
      $('.breadcrumb-nav').addClass('fixed');
      $('.breadcrumb-nav').css('top',$('.header-menu.is-fixed').outerHeight()  + "px");
    }
    else{
      $('.breadcrumb-nav').removeClass('fixed');
      $('.breadcrumb-nav').css('top','');
    }
  });
});

//triger button social
$('.btn-like-fb').on('click',function(){
  $(".fb-like").find("a.connect_widget_like_button").click();
})

//details product
var galleryThumbs = new Swiper('.thumbs-product', {
  spaceBetween: 15,
  slidesPerView: 3,
  loop: false,
  loopedSlides: 5, 
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 4,
    }
  }
});
var galleryTop = new Swiper('.top-product', {
  spaceBetween: 30,
  loop:true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.next-product',
    prevEl: '.prev-product',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

})

// slideshow-home
var swiper = new Swiper('.sw-advertisement', {
  pagination: {
    el: '.swiper-pagination',
    type:'bullets',
    clickable:true,
  },
  lazy: true,
  zoom: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});
var mySwiperhome = document.querySelector('.sw-advertisement').swiper

$(".sw-advertisement").mouseenter(function() {
  mySwiperhome.autoplay.stop();
});

$(".sw-advertisement").mouseleave(function() {
  mySwiperhome.autoplay.start();
});

// list-product-home
var swiper = new Swiper('.list-1', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop:true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.next-slide-1',
    prevEl: '.prev-slide-1',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      spaceBetween: 10,
    }
  }
});
var mySwiper1 = document.querySelector('.list-1').swiper

$(".list-1").mouseenter(function() {
  mySwiper1.autoplay.stop();
});

$(".list-1").mouseleave(function() {
  mySwiper1.autoplay.start();
});
//
var swiper = new Swiper('.list-2', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop:true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.next-slide-2',
    prevEl: '.prev-slide-2',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      spaceBetween: 10,
    }
  }
});
var mySwiper2 = document.querySelector('.list-2').swiper

$(".list-2").mouseenter(function() {
  mySwiper2.autoplay.stop();
});

$(".list-2").mouseleave(function() {
  mySwiper2.autoplay.start();
});
//list-answer
var swiper = new Swiper('.sw-list-answer', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop:false,
  navigation: {
    nextEl: '.next-answer',
    prevEl: '.prev-answer',
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
});



// =================================================== carousel swiper ==============================


