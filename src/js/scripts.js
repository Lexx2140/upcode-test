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
    var slider = $(".owl-carousel");

    slider.owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: ["", ""],
        dots: true
    });

    // Custom Navigation Events
    $(".next").click(function() {
        slider.trigger('next.owl.carousel');
    })
    $(".prev").click(function() {
        slider.trigger('prev.owl.carousel');
    })
});

// Youtube API
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '800',
        width: '1000',
        videoId: 'Xd7huBu39qk',
        playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo': 0, 'rel': 0},
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}