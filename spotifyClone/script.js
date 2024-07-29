console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay')
let gif = document.getElementById('gif')

let songs = [
    { songName: "Salam-e-Ishq", filePath: "songs/1.mp3", covrPath: "1.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/2.mp3", covrPath: "2.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/3.mp3", covrPath: "3.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/4.mp3", covrPath: "4.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/5.mp3", covrPath: "5.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/6.mp3", covrPath: "6.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/7.mp3", covrPath: "7.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/8.mp3", covrPath: "8.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/9.mp3", covrPath: "9.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/10.mp3", covrPath: "10.jpg" },
]


// audioElement.play();

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})



audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})