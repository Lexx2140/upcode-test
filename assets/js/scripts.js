// Offcanvas menu

let offMenu = document.querySelector('.off-menu');
let burger = document.querySelector('.burger');

burger.addEventListener('click', e => {
	offMenu.classList.toggle('visible');
	burger.classList.toggle('open');
});

