import Swiper from '../vendor/swiper.min.js';

const mainSlider = new Swiper('.intro__inner', {
  sliderPerView: 1,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 8000,
  },

  navigation: {
    nextEl: '.intro__button-next',
    prevEl: '.intro__button-prev',
  },

  pagination: {
    el: '.intro__pagination',
    type: 'bullets',
    clickable: true,
  },
  
});

const sliderCart = new Swiper('.last-projects__image', {
  sliderPerView: 1,
  loop: true,
  speed: 800,
  nested: true,

  pagination: {
    el: '.last-projects__pagination',
    type: 'bullets',
    clickable: true,
  },
  
});

const sliderProjects = new Swiper('.last-projects__outher-slider', {
  slidesPerView: 3,
  loop: false,
  speed: 800,
  simulateTouch: false,
  spaceBetween: 25,
  touchRatio: 0,
 
  breakpoints: {
   380: {
     slidesPerView: 1,
   },
   992: {
     slidesPerView: 2,
   },
   1201: {
    slidesPerView: 3,
   },
   
  },

  navigation: {
    nextEl: '.last-projects__button-next',
    prevEl: '.last-projects__button-prev',
  },
  
});


let browserSlider = null;
const mediaQuerySize = 1200;

function sliderInit() {
  if (!browserSlider) {

    browserSlider = new Swiper('.browsers__carousel', {
      sliderPerView: 1,
      speed: 800,
      loop: true,
      pagination: {
        el: '.carousel__pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  }
}

function sliderDestroy() {
  if (browserSlider) {
    browserSlider.destroy();
    browserSlider = null;
  }
}
function checkClientWidth() {
  if(document.body.clientWidth <= mediaQuerySize) {
    sliderInit();
  } else {
    sliderDestroy();
  }
}
checkClientWidth();

window.addEventListener('resize', () => {
  checkClientWidth();
});