import { normalize } from '../js/utils.js';

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
          margin-top: 4rem;
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
            <div class="option">
                <img src="./images/gryffindor/flag.png" alt="Gryffindor" />
            </div>
            <div class="option">
                <img src="./images/ravenclaw/flag.png" alt="Ravenclaw" />
            </div>
            <div class="option">
                <img src="./images/slytherin/flag.png" alt="Slytherin" />
            </div>
            <div class="option">
                <img src="./images/hufflepuff/flag.png" alt="Hufflepuff" />
            </div>
          </div>
        </div>
    `;

    document.querySelector('#app').style.backgroundImage =
      'url(./images/backgrounds/choose-house.png)';
  }
}

export default ChooseHouseSection;
