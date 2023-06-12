import { navigateTo } from '../js/navigation.js';
import { normalize } from '../js/utils.js';
import { isMuted, switchStop } from '../js/audio.js';

class FinishButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const style = new CSSStyleSheet();
    style.replaceSync(`
      :host {
        display: block;
        position: relative;
        z-index: 10;
        width: 100%;
        height: 0;
      }

      :host(:hover) {
        cursor: pointer;
      }

      #wrapper {
        position: absolute;
        bottom: 0.5rem;
        right: 1.5rem;
      }

      svg {
        width: 2.5rem;
        opacity: 0.8;
        mix-blend-mode: lighten;
        transform: scaleX(-1); /* Flip the icon horizontally */
      }
    `);

    this.shadowRoot.innerHTML = `
      <div id="wrapper">
        <div>Finish</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
      </div>
    `;

    this.addEventListener('click', () => {
      const buttonSound = new Audio('./sounds/button-click.mp3');
      buttonSound.muted = isMuted();
      buttonSound.play();
      switchStop('true');
      navigateTo('finish');
    });

    this.shadowRoot.adoptedStyleSheets = [normalize, style];
  }
}

export default FinishButton;
