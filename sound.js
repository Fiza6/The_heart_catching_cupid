// Get references to the audio element and the button
const audio = document.getElementById('sound');
const playButton = document.getElementById('playButton');

// Variable to track the audio playback state
// let isPlaying = false;

// Function to play or pause the audio
function toggleAudio() {
//   if (isPlaying) {
    audio.currentTime = 0;
    audio.play();
     // Reset the audio to the beginning
    // isPlaying = false;
//   } else {
//     audio.play();
//     isPlaying = true;
//   }
}

// Add a click event listener to the button
playButton.addEventListener('click', toggleAudio);
