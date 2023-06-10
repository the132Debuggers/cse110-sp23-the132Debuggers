import { translate } from './translation.js';
import { themeColor } from '../js/utils.js';

const routes = {
  home: {
    back: null,
  },
  'sort-or-choose': {
    back: 'home',
  },
  'choose-house': {
    back: 'sort-or-choose',
  },
  'sorting-hat': {
    back: 'sort-or-choose',
  },
  'house-search': {
    back: 'sort-or-choose',
  },
};

/**
 * Sets the background image of the app based on the last visited page
 */
function setBackground() {
  const app = document.querySelector('#app');
  const header = document.querySelector('app-header');
  const lastVisited = localStorage.getItem('lastVisited');

  if (lastVisited === 'house-search') {
    const house = localStorage.getItem('house');
    app.style.backgroundImage = `url(./images/${house}/common-room.webp)`;
    header.style.borderColor = `${themeColor[house][1]}`;
    header.style.backgroundColor = `${themeColor[house][0]}b3`;
    console.log(header.style.borderBottomColor);
  } else {
    app.style.backgroundImage = `url(./images/backgrounds/${lastVisited}.webp)`;
    header.style.backgroundColor = 'rgb(30, 41, 59, 0.5)';
    header.style.borderBottomColor = 'black';
  }
}

/**
 * Navigates to the specified page
 * @param {string} to - The section component to navigate to
 * @param {object} attributes - The attributes to set on the section component
 */
export function navigateTo(to, attributes = {}) {
  const app = document.querySelector('#app');
  const main = app.querySelector('main');
  const section = document.createElement(`${to}-section`);
  // const language = localStorage.getItem('currentLanguage');

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(attributes)) {
    section.setAttribute(key, value);
  }

  const children = [section];

  if (to !== 'home') {
    children.push(document.createElement('back-button'));
  }

  localStorage.setItem('lastVisited', to);
  setBackground();
  main.replaceChildren(...children);
  translate(navigator.language);
}

/**
 * Navigates to the previous page
 */
export function navigateBack() {
  const lastVisited = localStorage.getItem('lastVisited');
  navigateTo(routes[lastVisited].back);
}

/**
 * Navigates to the last visited page
 */
export function initialize() {
  const lastVisited = localStorage.getItem('lastVisited');
  navigateTo(lastVisited || 'home');
}
