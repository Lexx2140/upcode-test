// Menu
let menu = document.querySelector('.top-menu');
let offMenu = document.querySelector('.off-menu');
let burger = document.querySelector('#offMenuToggle');

burger.addEventListener('click', e => {
	toggleMenu();
});

function toggleMenu() {
	offMenu.classList.toggle('visible');
	burger.classList.toggle('open');
}


// Slider
$(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
	    items: 1,
	    nav: true,
	    navText : ["",""],
	    dots: true
	});
});
