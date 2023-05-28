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

        
        .wrapper {
            text-align: center;
        }

        .wrapper h1 {
            font-family: 'Almendra SC';
            font-style: normal;
            font-weight: 400;
            font-size: 5rem;
            line-height: 6rem;
            text-align: center;

            color: #FFFFFF;
        }


        .row{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .option {
            gap: 3rem;
            border-radius: 1rem;
            padding: 4rem 5rem;
        }

        .option:hover {
            background-color: rgba(0, 0, 0, 0.3);
            box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.3);
        }

        @media (min-width: 768px) {
            :host {
              grid-template-columns: repeat(1, minmax(0, 1fr));
            }
    
            .option img {
              width: 10rem;
              height: 20rem;
            }
          }
    `);

    this.shadowRoot.adoptedStyleSheets = [normalize, style];

    this.shadowRoot.innerHTML = `
        

        <div class="wrapper">
          <h1>CHOOSE YOUR HOUSE</h1>
          <div class="row">
            <div class="option">
                <img src="./images/gryffindor.png" alt="Gryffindor" />
            </div>
            <div class="option">
                <img src="./images/ravenclaw.png" alt="Ravenclaw" />
            </div>
            <div class="option">
                <img src="./images/slytherin.png" alt="Slytherin" />
            </div>
            <div class="option">
                <img src="./images/hufflepuff.png" alt="Hufflepuff" />
            </div>
          </div>
        </div>
    `;

    document.querySelector('#app').style.backgroundImage =
      'url(./images/choose-house.png)';
  }
}

export default ChooseHouseSection;