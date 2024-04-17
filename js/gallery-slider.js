const swiper = new Swiper(".gallery-section__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    550: {
      slidesPerView: 2,
    },

    850: {
      slidesPerView: 3,
    },

    1280: {
      slidesPerView: 4,
    },
  },

  navigation: {
    nextEl: ".gallery-section__btn-next",
    prevEl: ".gallery-section__btn-prev",
  },
});
