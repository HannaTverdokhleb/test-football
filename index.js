(function() {
  var lastScrollTop = document.documentElement.scrollTop;
  let header = document.querySelector('.header');
  let burger = document.querySelector('.menu_burger');

  if (burger) {
      burger.addEventListener('click', (e) => {
          burger.classList.toggle('open');
          let menu = document.querySelector('.menu_list');
          menu.classList.toggle('open');
          document.body.classList.toggle('lock');
      })

      let menuLinks = document.querySelectorAll('.menu_item_link');
      
      if (menuLinks && menuLinks.length > 0) {
          for (let i = 0; i < menuLinks.length; i++) {
              let link = menuLinks[i];
              link.addEventListener('click', (e) => {
                  if (window.innerWidth < 992) {
                      burger.click();
                  }
              })
          }
      }
  }

  window.addEventListener('scroll', function() {
      let st = document.documentElement.scrollTop;
      if (st > lastScrollTop) {
         header.classList.add('hidden');
      } else if (st < lastScrollTop) {
          header.classList.remove('hidden');
      }
      lastScrollTop = st <= 0 ? 0 : st;
   }, false);

   const swiper = new Swiper('.swiper', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.arrow_right',
      prevEl: '.arrow_left',
    },
    breakpoints: {
      420: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      992: {
        slidesPerView: 4,
      },
    }
  });
})();

