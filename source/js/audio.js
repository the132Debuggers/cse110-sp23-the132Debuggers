function isMuted() {
  return localStorage.getItem('isMuted') === 'true';
}
function stopAudio() {
  return localStorage.getItem('stopAudio') === 'true';
}

function toggleMute() {
  localStorage.setItem('isMuted', !isMuted());
}

function switchStop(i) {
  if (i === 'false') {
    localStorage.setItem('stopAudio', false);
  } else {
    localStorage.setItem('stopAudio', true);
  }
}

export {
  isMuted, toggleMute, stopAudio, switchStop
};
