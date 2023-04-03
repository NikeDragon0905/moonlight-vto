'use strict';

var filter = 'all';

const glassList = [
  {
    id: '166233101',
    src: 'img/166233101.webp',
    type: 'man',
  },
  {
    id: '166233104',
    src: 'img/166233104.webp',
    type: 'woman',
  },
  {
    id: '166233107',
    src: 'img/166233107.webp',
    type: 'woman',
  },
  {
    id: '166233110',
    src: 'img/166233110.webp',
    type: 'man',
  },
  {
    id: '166233115',
    src: 'img/166233115.webp',
    type: 'man',
  },{
    id: '166233107',
    src: 'img/166233107.webp',
    type: 'woman',
  },
  {
    id: '166233110',
    src: 'img/166233110.webp',
    type: 'man',
  },
  {
    id: '166233115',
    src: 'img/166233115.webp',
    type: 'man',
  },{
    id: '166233107',
    src: 'img/166233107.webp',
    type: 'woman',
  },
  {
    id: '166233110',
    src: 'img/166233110.webp',
    type: 'man',
  },
  {
    id: '166233115',
    src: 'img/166233115.webp',
    type: 'man',
  },
];

const carouselSetting = {
  // dots: true,
  centerMode: true,
  enterPadding: '25%',
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true,
  // prevArrow: "<span class='slick-prev'>&lt;</span>",
  // nextArrow: "<span class='slick-next'>&gt;</span>",
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};

const $carousel = $('#carousel');
const $filter = $('.carousel-filter');
const $openModalBtn = $('#openVirtualRoom');

const initCarousel = () => {
  if ($carousel.hasClass('slick-initialized')) {
    $carousel.slick('unslick');
  };

  let carouselContent = '';
  glassList.map(item => {
    if(filter === 'all' || item.type === filter) { 
      carouselContent += `<div class="carousel-slide">
        <img src="${item.src}" alt="glass-item" data-id="${item.id}">
      </div>`;
    }
  });    

  $carousel.html(carouselContent);
  $carousel.slick(carouselSetting);
  $carousel.find('.slick-current').click();
};

$(document).ready(function () {
  $filter.on('click', 'button', function() {
    // change selected fitler style
    $filter.find('button').removeClass('selected');
    $(this).addClass('selected');
    // refresh carousel
    const role = $(this).data('role');
    filter = role;
    initCarousel(role);
  });
  $carousel.on('afterChange', function(event, slick, currentSlide) {
    // `currentSlide` contains the index of the currently selected slide
    const { id } = glassList[currentSlide];
    console.log('Current glass_id is ' + id);
    fitmixInstance.setFrame(id);
  });

  $carousel.on('click', '.carousel-slide', function() {
    const slideIndex = $(this).data('slick-index');
    $carousel.slick('slickGoTo', slideIndex);

    const id = $(this).attr('data-id');
  });
  
  $openModalBtn.click(function() {
    // check all settings on Slick site
    initCarousel();
    // show virtual room modal
    const $virtualRoom = $('#virtualRoom');
    $virtualRoom.modal({backdrop: false});
  });
});