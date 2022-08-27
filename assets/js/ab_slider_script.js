const heroSlider = document.querySelector(".heroSlider")
const heroSliderRightTop = document.querySelector(".heroSliderRightTop")
const heroSliderRightBottom = document.querySelector(".heroSliderRightBottom")
const categorySlider = document.querySelector(".categorySlider")
const liveSlider = document.querySelector(".liveSlider")
const cardProductSlide = document.querySelector(".cardProductSlide")
if(heroSlider){
    const swiper = new Swiper(".heroSlider", {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
if(heroSliderRightTop){
    const swiper = new Swiper(".heroSliderRightTop", {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
if(categorySlider){
    const swiper = new Swiper(".categorySlider", {
        slidesPerView: 5,
        spaceBetween: 10,
        breakpoints: {
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 10,
            spaceBetween: 10,
          },
        },
      });
}

if(liveSlider){
    var swiper = new Swiper(".liveSlider", {
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
          delay: -1,
          disableOnInteraction: false,
        },
        loop: true,
        speed: 6000,

        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
      });
}

if(cardProductSlide){
    var swiper = new Swiper(".cardProductSlide", {
        slidesPerView: 2,
        spaceBetween: 10,
        hashNavigation: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        grabCursor: true,
        loop: true,
        speed: 500,

        breakpoints: {
          992: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        },
      });
}
if(heroSliderRightBottom){
    var swiper = new Swiper(".heroSliderRightBottom", {
        slidesPerView: 2,
        spaceBetween: 10,
        hashNavigation: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        grabCursor: true,
        loop: true,
        speed: 1500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // breakpoints: {
        //   992: {
        //     slidesPerView: 4,
        //     spaceBetween: 10,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 10,
        //   },
        //   1200: {
        //     slidesPerView: 6,
        //     spaceBetween: 10,
        //   },
        // },
      });
}