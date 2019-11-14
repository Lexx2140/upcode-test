var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '400',
        width: '400',
        // videoId: 'hUjUhZ1Yy7Y',
        videoId: 'NLjbT9K9TOg',
        // playerVars: {
        //   'enablejsapi': 1,
        //   'autoplay': 1,
        //   'controls': 0,
        //   'loop': 1,
        //   'fs': 0,
        //   'host': 'https://www.youtube.com',
        //   'modestbranding' : 1
        // },

        playerVars: {
          autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.setVolume(0);
    event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event) {

    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //     setTimeout(stopVideo, 6000);
    //     done = true;
    // }
}



function stopVideo() {
    player.stopVideo();
}


function vidRescale(){

  var w = $(window).width()+200,
    h = $(window).height()+200;

  if (w/h > 16/9){
    player.setSize(w, w/16*9);
    $('.ytplayer').css({'left': '0px'});
  } else {
    player.setSize(h/9*16, h);
    $('.ytplayer').css({'left': -($('.ytplayer').outerWidth()-w)/2});
  }
}

$(window).on('load resize', function(){
  vidRescale();
});
