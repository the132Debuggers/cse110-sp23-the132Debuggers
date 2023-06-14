/**
 *
 * @returns Whether the audio is muted
 */
function isMuted() {
  return localStorage.getItem('isMuted') === 'true';
}
/**
 *
 * @returns Whether the audio should stop
 */
function stopAudio() {
  return localStorage.getItem('stopAudio') === 'true';
}
/**
 * Toggles the mute state of the audio
 */
function toggleMute() {
  localStorage.setItem('isMuted', !isMuted());
}
/**
 * Sets the stopAudio state of the audio
 * @param {*} i boolean value to set stopAudio to
 */
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
