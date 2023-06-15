const os = require('os');

let executablePath;

if (os.platform() === 'darwin') {
  executablePath = '/Applications/Chromium.app/Contents/MacOS/Chromium';
} else if (os.platform() === 'win32') {
  executablePath = 'C:\\Program Files\\Chromium\\chrome.exe';
} else if (os.platform() === 'linux') {
  if (os.release().includes('arch') || os.arch().includes('arm')) {
    executablePath = '/usr/bin/chromium';
  } else if (os.release().includes('ubuntu')) {
    executablePath = '/usr/bin/chromium-browser';
  } else if (os.release().includes('centos')) {
    executablePath = '/usr/bin/google-chrome';
  } else {
    throw new Error(`Unsupported Linux distribution: ${os.release()}`);
  }
} else {
  throw new Error(`Unsupported platform: ${os.platform()}`);
}

module.exports = {
  launch: {
    headless: 'new',
    executablePath,
    args: ['--no-sandbox'],
  },
};
