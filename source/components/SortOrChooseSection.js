import { normalize } from '../js/css.js';
import { navigateTo } from '../js/navigation.js';
import { isMuted } from '../js/audio.js';

class SortOrChooseSection extends HTMLElement {
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

      .option {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
        text-align: center;
        border-radius: 0.5rem;
        padding: 1rem 0.5rem;
      }

      .option:hover {
        background-color: rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }

      .option h1 {
        font-size: 1.5rem;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 0.5rem 1.5rem;
        border-radius: 0.5rem;
      }

      .option img {
        height: 11rem;
        margin-left: auto;
        margin-right: auto;
      }

      @media (min-width: 768px) {
        :host {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .option img {
          height: 16rem;
        }
      }
    `);

    this.shadowRoot.adoptedStyleSheets = [normalize, style];

    this.shadowRoot.innerHTML = ` 
        <div class="wrapper">
          <div id="choose" class="option">
            <h1>Choose Your Own House</h1>
            <img src="./images/all-crests.webp" alt="Crests of all four houses" />
          </div>
        </div>
        <div class="wrapper">
          <div id="sort" class="option">
            <h1>Be Sorted by Sorting Hat</h1>
            <img src="./images/sorting-hat.webp" alt="Image of the sorting hat" />
          </div>
        <div>
    `;

    /**
     * Add event listeners to the two options. Users can click on either one
     * to navigate to the corresponding page.
     */
    const buttonSound = new Audio('./sounds/button-click.mp3');
    this.shadowRoot.querySelector('#choose').addEventListener('click', () => {
      buttonSound.muted = isMuted();
      buttonSound.play();
      navigateTo('choose-house');
    });
    this.shadowRoot.querySelector('#sort').addEventListener('click', () => {
      buttonSound.muted = isMuted();
      buttonSound.play();
      navigateTo('sorting-hat');
    });
  }
}

export default SortOrChooseSection;
