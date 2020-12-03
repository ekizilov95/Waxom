
const playBtn = document.querySelector('.video__play'),
videoInner = document.querySelector('.video__inner'),
video = document.querySelector('.video__outher'),
content = document.querySelector('.video__content'),
timer = document.querySelector('.video__timer');


playBtn.addEventListener('click', () => {
    video.play(); 
    video.setAttribute("controls", "controls");
    playBtn.classList.add('hide');
    videoInner.classList.add('video_show');
    videoInner.classList.remove('video__inner');
    content.classList.add('hide');
});




