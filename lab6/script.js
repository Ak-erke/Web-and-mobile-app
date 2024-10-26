const tracks = [
    { name: "The Weeknd - House of Balloons", url: "tracks/TheWeeknd_HouseOfBalloons.mp3", cover: "images/houseob.jfif" },
    { name: "JAEHYUN - Roses", url: "tracks/JAEHYUN - Roses.mp3", cover: "images/Roses.jfif" },
    { name: "BTS - Black Swan", url: "tracks/BTS_-_Black_Swan.mp3", cover: "images/BTS.jfif" }
];

let curTrackIndex = 0;

const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const nextButton = document.getElementById('next');
const cover = document.getElementById('cover');
const trackNameDisplay = document.getElementById('track-name');
const trackListElement = document.getElementById('track-list');

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.url;
    cover.src = track.cover;
    trackNameDisplay.textContent = track.name;
}

// Play or pause 
function togglePlayPause() {
    audio.paused ? audio.play() : audio.pause();
    playPauseButton.textContent = audio.paused ? 'Play' : 'Pause';
}

// Play the next track
function playNextTrack() {
    curTrackIndex = (curTrackIndex + 1) % tracks.length;
    loadTrack(curTrackIndex);
    audio.play();
    playPauseButton.textContent = 'Pause';
}

function handleTrackSelection(index) {
    curTrackIndex = index;
    loadTrack(curTrackIndex);
    audio.play();
    playPauseButton.textContent = 'Pause';
}

function populateTrackList() {
    tracks.forEach((track, index) => {
        const trackItem = document.createElement('li');
        trackItem.textContent = track.name;
        trackItem.addEventListener('click', () => handleTrackSelection(index));
        trackListElement.appendChild(trackItem);
    });
}

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextTrack);
audio.addEventListener('ended', playNextTrack);

populateTrackList();
loadTrack(curTrackIndex);
