import closeTagline from './modules/tagline.js';
closeTagline()
import mobileNav from './modules/mobile-nav.js';
mobileNav();
import likeButtons from './modules/like-buttons.js';
likeButtons();
// Import the function from the countdown module
import { initCountdown } from './modules/countdown-timer.js';

// Run the timer
initCountdown();

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
console.log('swiper_init');

// init Swiper:
const swiper = new Swiper('.swiper', {
    // Core Layout
    slidesPerView: 'auto',      // Matches your 4 cards in a row
    spaceBetween: 24,     // Matches the 24px gap in your mockup
    grabCursor: true,
    // The Loop Fix
    loop: true,
    // Обов'язково для коректного зациклення при 'auto'
    loopedSlides: 4,

    // Додаткові налаштування для стабільності
    centeredSlides: false,
    allowTouchMove: true,
})



// Приклад підключення інших модулів (як у тебе)



