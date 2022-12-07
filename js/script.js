window.onscroll = function(){
	var html = document.documentElement, body = document.body;
	var headerFix = document.querySelector('.header-fix');
	if(html.scrollTop>50||body.scrollTop>50) {
		headerFix.classList.add('header-fix-active')
	} else headerFix.classList.remove('header-fix-active');
}

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

window.addEventListener('click', function(event) {
	let windows = document.querySelector('.window');
	if (event.target.closest('._btn-close')) {

		windows.classList.toggle('_window-active')
	} else if (!event.target.closest('.window-form') && windows.closest('._window-active')) {
		windows.classList.remove('_window-active')
	}
	let windowsFormOne = document.querySelector('.window-form-one');
	let windowsFormTwo = document.querySelector('.window-form-two');
	if (event.target.closest('.window-form-btn') ){
		windowsFormOne.classList.toggle('_window-close')
		windowsFormTwo.classList.toggle('_window-open')
	}else if (event.target.closest('._btn-close') && windowsFormTwo.closest('._window-open')) {
		windowsFormTwo.classList.toggle('_window-open')
		windowsFormOne.classList.toggle('_window-close')
	}
})
