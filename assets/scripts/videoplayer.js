///////------------video player------------///////
const video_player = document.querySelector('#video_player'),
mainVideo = video_player.querySelector('#main-video')
controls = video_player.querySelector('.controls')
progressAreaTime = video_player.querySelector('.progressAreaTime')
progressArea = video_player.querySelector('.progress-area')
progress_Bar = video_player.querySelector('.progress-bar')
fast_rewind = video_player.querySelector('.fast-rewind')
play_pause = video_player.querySelector('.play')
fast_forward = video_player.querySelector('.fast-forward')
volume = video_player.querySelector('.volume')
volume_range = video_player.querySelector('.volume_range')
current = video_player.querySelector('.current')
autp_play = video_player.querySelector('.auto-play')
settingsBtn = video_player.querySelector('.settingsBtn')
picture_in_picture = video_player.querySelector('.picture_in_picture')
fullscreen = video_player.querySelector('.fullscreen')
settings = video_player.querySelector('#settings')
playback = video_player.querySelector('.playback')


function playVideo() {
    play_pause.innerHTML = "pause";
    play_pause.title = "play";
    video_player.classList.add('paused')
    mainVideo.play();
}

function pauseVideo() {
    play_pause.innerHTML = "play_arrow";
    play_pause.title = "pause";
    video_player.classList.remove('paused')
    mainVideo.pause();
}

play_pause.addEventListener('click'()>={
    const isVideoPaused = video_player.classList.contains('paused');

    isVideoPaused ? pauseVideo() : playVideo();
})
