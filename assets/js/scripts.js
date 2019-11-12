// Offcanvas menu

let offMenu = document.querySelector('.off-menu');
let burger = document.querySelector('#offMenuToggle');

burger.addEventListener('click', e => {
	offMenu.classList.toggle('visible');
	burger.classList.toggle('open');
});


// Slider
// $(function() {
// 	$(".owl-carousel").owlCarousel({
// 		loop:true,
// 	    items: 1,
// 	    margin: 0
// 	    // nav: true,
// 	    // dots: true
// 	});
// });
