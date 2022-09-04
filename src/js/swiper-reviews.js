import Swiper, { Pagination, Autoplay } from 'swiper';

const swiper = new Swiper('.swiper', {
    modules: [Pagination, Autoplay],
    
    loop: true,
  
    grabCursor: true,
   
    autoplay: {
        delay: 4000,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    spaceBetween: 40,
            
});