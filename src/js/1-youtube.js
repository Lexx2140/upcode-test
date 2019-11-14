var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        width: '1280',
        height: '720',
        videoId: 'NLjbT9K9TOg',
        playerVars: {
         loop: 1,
         enablejsapi: 1,
         autoplay: 1,
         controls: 0,
         host: 'https://www.youtube.com',
         modestbranding: 1
        },

        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    event.target.setVolume(0);
    event.target.playVideo();
}

function ytResize() {

    let w = window.innerWidth + 200,
        h = window.innerHeight + 200;

    if (w / h > 16 / 9) {

        player.setSize(w, w / 16 * 9);
    } else {
        player.setSize(h / 9 * 16, h);
    }
}

window.addEventListener('load', ytResize);


function playPauseVideoOnScroll(scrollTop) {
    var videoPlayer = document.querySelector('#ytplayer');
    playPauseVideo(scrollTop < (videoPlayer.clientHeight / 2));
}

function playPauseVideoOnSlide(event) {
    var activeSlide = event.target.querySelector('.active');
    playPauseVideo(activeSlide.querySelector('.video'));
}

function playPauseVideo(bool) {
    if (bool) {
        player.playVideo();
    } else {
        player.pauseVideo();
    }
}