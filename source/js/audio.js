function isMuted() {
  return localStorage.getItem('isMuted') === 'true';
}

function toggleMute() {
  localStorage.setItem('isMuted', !isMuted());
}

export { isMuted, toggleMute };