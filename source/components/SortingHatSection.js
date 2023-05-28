import { normalize } from '../js/utils.js';

class SortingHatSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const style = new CSSStyleSheet();
    style.replaceSync(`
      :host {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 0.25rem;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        place-items: center;
        place-content: center;
      }

      .button{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .button h1 {
        display: inline-block;
        padding: 10px 20px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        border: 1px solid black;
        color: white;
        font-size: 2.5rem;
      }

      .button img {
        vertical-align: middle;
        margin-bottom: 2rem;
        height: 25rem;
      }

      @media (max-width: 555px) {
        .button img {
          height: 12rem;
          justify-items: center;
        }

        .button h1 {
          font-size: 2rem;
          border-radius: 10px;
        }
      }

      @media (max-width: 395px) {
        .button h1 {
          font-size: 1.5rem;
          border-radius: 5px;
        }
      }
    `);

    this.shadowRoot.adoptedStyleSheets = [normalize, style];

    this.shadowRoot.innerHTML = ` 
        <div class="wrapper">
            <button class="button"> 
              <img src="./images/sorting-hat.svg" alt="Image of the sorting hat" />
              <h1> CLICK ME TO BE SORTED </h1>
            </button>

        <div>
    `;

    document.querySelector('#app').style.backgroundImage =
      'url(./images/sorting-hat-bg.png)';
  }
}

export default SortingHatSection;
