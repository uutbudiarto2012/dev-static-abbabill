const heroSlider = document.querySelector(".heroSlider")
const heroSliderRightTop = document.querySelector(".heroSliderRightTop")
const heroSliderRightBottom = document.querySelector(".heroSliderRightBottom")
const categorySlider = document.querySelector(".categorySlider")
const liveSlider = document.querySelector(".liveSlider")
const cardProductSlide = document.querySelector(".cardProductSlide")
if (heroSlider) {
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
if (heroSliderRightTop) {
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
if (categorySlider) {
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

if (liveSlider) {
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

if (cardProductSlide) {
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
if (heroSliderRightBottom) {
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

// TOGGLE MENU PROFILE
const btnToggleProfileMenu = document.querySelector(".btn-toggle-profile-menu")
if (btnToggleProfileMenu) {
  const menuProfileBody = document.querySelector(".menu-body.menu-profile")
  btnToggleProfileMenu.addEventListener("click", function () {
    menuProfileBody.classList.toggle("show")
    document.querySelector('body').classList.toggle("hiddenFlow")
  })
}
// TOGGLE MENU PROFILE

// SELECT PROFILE IMAGE
const inputImagePreview = document.querySelector(".inputImagePreview")
const imagePreview = document.querySelector("#image-preview")
if (inputImagePreview && imagePreview) {
  const errorFile = document.querySelector('.error-file')
  inputImagePreview.addEventListener("input", function (event) {
    const fileType = event.target.files[0].type
    if (fileType.toLowerCase() === "image/jpeg" || fileType.toLowerCase() === "image/jpg" || fileType.toLowerCase() === "image/png") {
      const reader = new FileReader();
      reader.onload = function () {
        imagePreview.src = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      errorFile.classList.add("d-none")
    } else {
      errorFile.classList.remove("d-none")
    }
  })
}

const togglePassword = document.querySelectorAll('.toggle-password')
togglePassword.forEach(item => {
  const inputPass = item.previousElementSibling
  item.addEventListener("click", function () {
    if (inputPass.type === "password") {
      inputPass.type = "text";
    } else {
      inputPass.type = "password";
    }
  })
});


const btnMenuOpenSideCategory = document.querySelector(".btn-menu-category")
const sideMenuProducts = document.querySelector(".side-menu-products")

if (btnMenuOpenSideCategory) {
  btnMenuOpenSideCategory.addEventListener("click", function () {
    sideMenuProducts.classList.toggle("d-none")
  })
}


// DETAIL


var swiperThumbs = new Swiper(".thumbsSwipper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mainSwipper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperThumbs,
  },
});

// if (window.innerWidth <= 576) {

//   var swiperThumbs = new Swiper(".mainVarianSwipper", {
//     spaceBetween: 5,
//     slidesPerView: 3,
//     freeMode: true,
//     watchSlidesProgress: true,
//   });
// }

var init = false;
function swiperMainVar() {
  if (window.innerWidth <= 576) {
    if (!init) {
      init = true;
      swiperMainVarian = new Swiper(".mainVarianSwipper", {
        spaceBetween: 5,
        freeMode: true,
        slidesPerView: 3,
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperMainVar();
window.addEventListener("resize", swiperMainVar);
var initSub = false;
function swiperSubVar() {
  if (window.innerWidth <= 576) {
    if (!init) {
      initSub = true;
      swiperSubVarian = new Swiper(".subVarianSwipper", {
        spaceBetween: 5,
        freeMode: true,
        slidesPerView: 10,
      });
    }
  } else if (init) {
    swiper.destroy();
    initSub = false;
  }
}
swiperSubVar();
window.addEventListener("resize", swiperSubVar);



// mainVarianSwipper

const inputCountBuy = document.querySelector(".input-count-buy");
const inputCountWishlist = document.querySelector(".input-count-buy-for-wishlist");
const fixQTY = document.querySelector("#fix_qty");
const fixCART = document.querySelector("#fix_cart");

const countBuyHandler = (data) => {
  const newData = parseInt(inputCountBuy.value) + data;
  if (
    newData > 0 &&
    newData <= fixQTY.value &&
    newData <= fixCART.value
  ) {
    inputCountBuy.value = newData;
    inputCountWishlist.value = newData;
  }
};
if (inputCountBuy) {
  inputCountBuy.addEventListener("input", function () {
    let countValue = parseInt(this.value);
    if (countValue > fixQTY.value || countValue > fixCART.value) {
      this.value = fixQTY.value;
    }
    if (countValue < 1) {
      this.value = 1;
    }
  });

}

const itemVarMains = document.querySelectorAll(".item-var-main")
if (itemVarMains) {
  const chVarian = document.querySelector(".child-varian")
  itemVarMains.forEach(itemVarMain => {
    itemVarMain.addEventListener("click", function () {
      if (chVarian) {
        chVarian.classList.remove("d-none")
      }
    })
  });

}



// HANDLE SLIDE VARIAN SELECTED
const itemVarMain = document.querySelectorAll(".item-var-main")
if (itemVarMain.length > 0) {
  itemVarMain.forEach(item => {
    item.addEventListener("click", function () {
      const btnVarian = item.getAttribute("data-varian")
      const t = document.querySelector(".mainSwipper .swiper-slide.swiper-slide-active img")
      t && t.setAttribute("src", btnVarian)

    })
  });
}
