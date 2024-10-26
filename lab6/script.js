const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const nextButton = document.getElementById('next');
const cover = document.getElementById('cover');
const trackNameDisplay = document.getElementById('track-name');
const trackListElement = document.getElementById('track-list');

const tracks = [
    { name: "The Weeknd - House of Balloons", url: "tracks/TheWeeknd_HouseOfBalloons.mp3", cover: "images/houseob.jfif" },
    { name: "JAEHYUN - Roses", url: "tracks/JAEHYUN - Roses.mp3", cover: "images/Roses.jfif" },
    { name: "BTS - Black Swan", url: "tracks/BTS_-_Black_Swan.mp3", cover: "images/BTS.jfif" }
];

let curTrackIndex = 0;

// Load the track and update the UI
function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.url;
    cover.src = track.cover;
    trackNameDisplay.textContent = track.name;
}

// Toggle play/pause functionality
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

// Play the next track
function playNextTrack() {
    curTrackIndex = (curTrackIndex + 1) % tracks.length;
    loadTrack(curTrackIndex);
    audio.play();
    playPauseButton.textContent = 'Pause';
}

// Populate the track list dynamically
function populateTrackList() {
    tracks.forEach((track, index) => {
        const trackItem = document.createElement('li');
        trackItem.textContent = track.name;
        trackItem.addEventListener('click', () => {
            curTrackIndex = index;
            loadTrack(curTrackIndex);
            audio.play();
            playPauseButton.textContent = 'Pause';
        });
        trackListElement.appendChild(trackItem);
    });
}

// Event listeners for buttons
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextTrack);
audio.addEventListener('ended', playNextTrack);

// Initialize the app
populateTrackList();
loadTrack(curTrackIndex);
