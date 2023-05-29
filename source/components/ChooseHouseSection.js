import { navigateTo } from '../js/navigation.js';
import { normalize, houses } from '../js/utils.js';

class ChooseHouseSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const style = new CSSStyleSheet();
    style.replaceSync(`
        :host {
          height: 100%;
          display: flex;
        }

        #wrapper {
          display: flex;
          width: 100%;
          flex-direction: column;
          place-items: center;
          place-content: center;
        }

        h1 {
          font-size: 3rem;
          text-align: center;
        }

        #flags {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          place-items: center;
          place-content: center;
          gap: 2rem;
        }

        .option {
          order-radius: 0.5rem;
          padding: 1.5rem;
          max-width: 12rem;
        }

        .option:hover {
          background-color: rgba(0, 0, 0, 0.3);
          box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          #flags {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .option {
            max-width: 8rem;
            padding: 1rem;
          }
        }
    `);

    this.shadowRoot.adoptedStyleSheets = [normalize, style];

    this.shadowRoot.innerHTML = `
        <div id="wrapper">
          <h1>Choose Your House</h1>
          <div id="flags">
          </div>
        </div>
    `;

    const flags = this.shadowRoot.querySelector('#flags');

    // eslint-disable-next-line no-restricted-syntax
    for (const house of houses) {
      const option = document.createElement('div');
      option.classList.add('option');
      option.innerHTML = `
        <img src="./images/${house}/flag.webp" alt="${house}'s flag" />
      `;
      option.addEventListener('click', () => {
        localStorage.setItem('house', house);
        navigateTo('house-search');
      });
      flags.appendChild(option);
    }
  }
}

export default ChooseHouseSection;
