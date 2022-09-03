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

// TOGGLE MENU PROFILE
const btnToggleProfileMenu = document.querySelector(".btn-toggle-profile-menu")
if(btnToggleProfileMenu){
  const menuProfileBody = document.querySelector(".menu-body.menu-profile")
  btnToggleProfileMenu.addEventListener("click",function(){
    menuProfileBody.classList.toggle("show")
    document.querySelector('body').classList.toggle("hiddenFlow")
  })
}
// TOGGLE MENU PROFILE

// SELECT PROFILE IMAGE
const inputImagePreview = document.querySelector(".inputImagePreview")
const imagePreview = document.querySelector("#image-preview")
if(inputImagePreview && imagePreview){
  const errorFile = document.querySelector('.error-file')
  inputImagePreview.addEventListener("input",function(event){
    const fileType = event.target.files[0].type
    if( fileType.toLowerCase() === "image/jpeg" || fileType.toLowerCase() === "image/jpg" || fileType.toLowerCase() === "image/png"){
      const reader = new FileReader();
      reader.onload = function(){
        imagePreview.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    errorFile.classList.add("d-none")
    }else{
      errorFile.classList.remove("d-none")
    }
  })
}

const togglePassword = document.querySelectorAll('.toggle-password')
togglePassword.forEach(item => {
  const inputPass = item.previousElementSibling
  item.addEventListener("click",function(){
    if (inputPass.type === "password") {
      inputPass.type = "text";
    } else {
      inputPass.type = "password";
    }
  })
});


const btnMenuOpenSideCategory = document.querySelector(".btn-menu-category")
const sideMenuProducts = document.querySelector(".side-menu-products")

if(btnMenuOpenSideCategory){
  btnMenuOpenSideCategory.addEventListener("click",function(){
    sideMenuProducts.classList.toggle("d-none")
  })
}