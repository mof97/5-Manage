
var $slide = 3 

if (window.innerWidth <= 990) {
    $slide = 1;
} else {
    $slide = 3
}


window.onresize = function () {
    if (window.innerWidth <= 990) {
        $slide = 1;
    }else{
        $slide = 3
    }
}

var swiper = new Swiper('.swiper-container', {
  slidesPerView: $slide,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


