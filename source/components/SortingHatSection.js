import { normalize, themeColor, randomHouse } from '../js/utils.js';
import { navigateTo } from '../js/navigation.js';
import { isMuted } from '../js/audio.js';

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
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        place-items: center;
        place-content: center;
        cursor: pointer;
      }

      #button:hover {
        background-color: rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.3);
      }

      #button img {
        width: 24rem;
      }

      #notification {
        display: none;
        font-size: 2rem;
      }

      #tip {
        font-size: 2.25rem;
        padding: 0.5rem 1.5rem;
        background-color: rgba(0, 0, 0, 0.6);
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
            <img src="./images/sorting-hat.webp" alt="Image of the sorting hat"/>
            <h1 id="notification">You have been sorted into...</h1>
            <h1 id="tip">Click Me To Be Sorted</h1>
          </div>
         <div>
    `;

    /**
     * @event click - When the user clicks the button, the house is randomly
     *                chosen and the user is navigated to the house search page.
     */
    this.shadowRoot.querySelector('#button').addEventListener(
      'click',
      () => {
        // click sound of the button
        const buttonSound = new Audio('./sounds/button-click.mp3');
        buttonSound.muted = isMuted();
        buttonSound.play();

        // randomly choosing a house
        const house = randomHouse();
        localStorage.setItem('house', house);

        // sorting hat's audio for corresponding house
        const audio = new Audio(`./sounds/${house}_sort.m4a`);
        audio.muted = isMuted();
        audio.play();

        // set the notification and tip to corresponding house
        const tip = this.shadowRoot.querySelector('#tip');
        tip.textContent = house;
        const notification = this.shadowRoot.querySelector('#notification');
        notification.style = `
          display: block;
        `;
        tip.style = `
          display: none;
        `;

        // set the time for display result and navigation to house search page
        setTimeout(() => {
          tip.style = `
            display: block;
            border: 2px solid ${themeColor[house][1]};
            -webkit-text-stroke: 1px ${themeColor[house][1]};
            color: ${themeColor[house][1]};
            background-color: ${themeColor[house][0]};
          `;
          tip.textContent = house;

          // wait and navigate to house search page
          setTimeout(() => {
            navigateTo('house-search');
          }, 1000);
        }, 3150);
      },
      { once: true }
    );
  }
}

export default SortingHatSection;
