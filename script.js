const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const video = document.querySelector('video');
const playButton = document.querySelector('.player__button');
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volumeSlider = document.querySelector('[name="volume"]');
const speedSlider = document.querySelector('[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');

function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playButton.textContent = '►';
  }
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

function setVolume() {
  video.volume = volumeSlider.value;
}

function setPlaybackSpeed() {
  video.playbackRate = speedSlider.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
volumeSlider.addEventListener('input', setVolume);
speedSlider.addEventListener('input', setPlaybackSpeed);
skipButtons.forEach(button => button.addEventListener('click', skip));
