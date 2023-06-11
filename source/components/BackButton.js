import { navigateBack } from '../js/navigation.js';
import { normalize } from '../js/utils.js';

class BackButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const style = new CSSStyleSheet();
    style.replaceSync(`
      :host {
        position: relative;
        z-index: 10;
        width: 0;
        height: 0;
      }

      :host(:hover) {
        cursor: pointer;
      }

      #wrapper {
        position: absolute;
        bottom: 0.5rem;
        left: 1rem;
      }

      svg {
        width: 2.5rem;
        opacity: 0.8;
        mix-blend-mode: lighten;
      }
    `);

    this.shadowRoot.innerHTML = `
      <div id="wrapper">
        <div>Back</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
      </div>
    `;

    this.addEventListener('click', () => {
      navigateBack();
    });

    this.shadowRoot.adoptedStyleSheets = [normalize, style];
  }
}

export default BackButton;
