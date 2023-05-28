import { normalize } from '../js/utils.js';

class ChooseHouseSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // TODO: change px to rem
    const style = new CSSStyleSheet();
    style.replaceSync(`
        :host {
            height: 100%;
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 0.25rem;
        }

        .h1 {
            position: absolute;
            width: 835px;
            height: 108px;
            left: 446px;
            top: 136px;

            font-family: 'Almendra SC';
            font-style: normal;
            font-weight: 400;
            font-size: 85px;
            line-height: 101px;
            text-align: center;

            color: #FFFFFF;
        }

        .wrapper {
            display: flex;
            flex-direction: row;
            place-items: center;
            place-content: center;
        }

        .option {
            display: flex;
            gap: 1.5rem;
            flex-direction: column;
            text-align: center;
            border-radius: 0.5rem;
            padding: 2rem 1rem;
        }

        .option:hover {
            background-color: rgba(0, 0, 0, 0.3);
            box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.3);
        }

        @media (min-width: 768px) {
            :host {
              grid-template-rows: repeat(4, minmax(0, 1fr));
            }
    
            .option img {
              height: 12rem;
            }
          }
    `);

    this.shadowRoot.adoptedStyleSheets = [normalize, style];

    // TODO: add image links
    this.shadowRoot.innerHTML = `
        <h1>CHOOSE YOUR HOUSE</h1>

        <div class="wrapper">
          <div class="option">
              <img src="" alt="Gryffindor" />
          </div>
          <div class="option">
              <img src="" alt="Ravenclaw" />
          </div>
          <div class="option">
              <img src="" alt="Slytherin" />
          </div>
          <div class="option">
              <img src="" alt="Hufflepuff" />
          </div>
        </div>
    `;

    document.querySelector('#app').style.backgroundImage =
      'url(./images/choose-house.png)';
  }
}

export default ChooseHouseSection;