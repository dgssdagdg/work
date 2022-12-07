const swiper = new Swiper('.examples-sliders', {
	loop: true,
	slidesPerView: 1,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
});
const swiperMini = new Swiper('.examples-sliders-two', {
	loop: true,
	spaceBetween: 8,

	navigation: {
		nextEl: '.examples-button-next',
		prevEl: '.examples-button-prev',
	  },
});
