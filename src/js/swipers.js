import Swiper from 'swiper/swiper-bundle';
import { Pagination } from 'swiper';

const brandsSwiper = new Swiper('.brands-slider', {
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoHeight: false,
    direction: 'horizontal',
    slidesPerView: 1.4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    watchOverflow: true,
    loop: false,
    freeMode: true,
    centerInsufficientSlides: true,
    slidesOffsetBefore: -18,
    slidesOffsetAfter: 50,
    breakpoints: {
        480: {
            slidesPerView: 2.2,
        },
        700: {
            slidesPerView: 3.2,
        },
        768: {
            slidesPerView: Infinity,
        }
    }
});

const technicalSwiper = new Swiper('.technical-slider', {
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoHeight: false,
    direction: 'horizontal',
    slidesPerView: 1.4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    watchOverflow: true,
    loop: false,
    freeMode: true,
    centerInsufficientSlides: true,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 24,
    breakpoints: {
        480: {
            slidesPerView: 2.2,
        },
        700: {
            slidesPerView: 3.2,
        },
        768: {
            slidesPerView: Infinity,
        }
    }
});

const priceSwiper = new Swiper('.price-slider', {
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoHeight: false,
    direction: 'horizontal',
    slidesPerView: 1.2,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    watchOverflow: true,
    loop: false,
    freeMode: true,
    centerInsufficientSlides: true,
    slidesOffsetBefore: 12,
    slidesOffsetAfter: 24,
    breakpoints: {
        420: {
            slidesPerView: 1.5,
        },

        520: {
            slidesPerView: 1.9,
        },

        620: {
            slidesPerView: 2.2,
        },

        720: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: Infinity,
        }
    }
});