import { normalize } from '../js/utils.js';

class SortingHatSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const style = new CSSStyleSheet();
    style.replaceSync(`
      :host {
        height: 100%;
        display: flex;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        place-items: center;
        place-content: center;
        width: 100%;
      }

      #button {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        place-items: center;
        place-content: center;
      }

      #button img {
        width: 24rem;
      }

      #button h1 {
        font-size: 2rem;
        padding: 0.5rem 1.5rem;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 0.5rem;
        text-align: center;
      }

      @media (max-width: 768px) {
        #button img {
          width: 18rem;
        }

        #button h1 {
          font-size: 1.5rem;
        }
      }
    `);

    this.shadowRoot.adoptedStyleSheets = [normalize, style];

    this.shadowRoot.innerHTML = ` 
        <div class="wrapper">
          <div id="button"> 
            <img src="./images/sorting-hat.png" alt="Image of the sorting hat"/>
            <h1>Click Me To Be Sorted</h1>
          </div>
         <div>
    `;

    document.querySelector('#app').style.backgroundImage =
      'url(./images/backgrounds/sorting-hat.png)';
  }
}

export default SortingHatSection;
