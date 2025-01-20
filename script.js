const audioElement = document.getElementById('audioElement');
const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        audioElement.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
});