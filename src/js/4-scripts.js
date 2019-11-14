// Menu
let header = document.querySelector('header');
let menu = document.querySelector('.top-menu');
let menuItems = menu.querySelectorAll('li');
let offMenu = document.querySelector('.off-menu');
let offMenuItems = offMenu.querySelectorAll('a');
let burger = document.querySelector('#offMenuToggle');

let toggleOffMenu = () => {
    offMenu.classList.toggle('visible');
    burger.classList.toggle('open');
}

// Get siblings function
let getSiblings = (elem) => {

    var siblings = [];
    var sibling = elem.parentNode.firstChild;

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling
    }
    return siblings;
}

// Toggle active state for elements
let changeActiveState = (item) => {
    let itemSiblings = getSiblings(item);

    itemSiblings.forEach((sib) => {
        sib.classList.remove('active');
    });

    item.classList.add('active');
}

// Toggle Ofcanvas menu
burger.addEventListener('click', e => toggleOffMenu());

// Toggle off menu on click on menu item
offMenuItems.forEach((item) => {
    item.addEventListener('click', e => {
        setTimeout(() => toggleOffMenu(), 800)
    });
})

// Toggle active menu item on click
menuItems.forEach((item) => {
    item.addEventListener('click', e => {
        changeActiveState(item);
    });
})


window.onscroll = (e) => {

    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    // Change menu active state on scroll
    menuItems.forEach((item) => {

        let href = item.firstElementChild.getAttribute('href');
        let activeSection = document.querySelector('section[id="' + href.slice(1) + '"]');
        let offScreen = activeSection.offsetTop <= scrollTop && (activeSection.offsetTop + activeSection.clientHeight) > scrollTop;

        item.classList.toggle('active', offScreen);
    })

    // Apply darker header background
    header.classList.toggle('darken', (scrollTop > header.clientHeight));


    // Pause/play video player
    playPauseVideoOnScroll(scrollTop);
}

// Slider
$(function() {
    var slider = $(".owl-carousel");

    slider.owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: ["", ""],
        dots: true,
        onTranslated: playPauseVideoOnSlide
    });

    // Custom Navigation Events
    $(".next").click(function() {
        slider.trigger('next.owl.carousel');
    })
    $(".prev").click(function() {
        slider.trigger('prev.owl.carousel');
    })
});


