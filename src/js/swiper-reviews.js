import Swiper, { Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    grabCursor: true,
   
    autoplay: {
       delay: 3000,
    },
   
});