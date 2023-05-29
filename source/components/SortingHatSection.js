import { normalize } from '../js/utils.js';
import { navigateTo } from '../js/navigation.js';

const themeColor = {
  gryffindor: ['#b91c23', '#f2b200'],
  hufflepuff: ['#f8be12', '#040005'],
  ravenclaw: ['#0b3259', '#9ea8a0'],
  slytherin: ['#00865d', '#b9b3c0'],
};

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

      #notification {
        display: none;
        font-size: 2rem;
      }

      #tip {
        font-size: 2.25rem;
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
            <h1 id="notification">You have been sorted into...</h1>
            <h1 id="tip">Click Me To Be Sorted</h1>
          </div>
         <div>
    `;

    this.shadowRoot.querySelector('#button').addEventListener('click', () => {
      const house = ['gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin'];
      const randomHouse = house[Math.floor(Math.random() * house.length)];
      localStorage.setItem('house', randomHouse);

      const tip = this.shadowRoot.querySelector('#tip');
      tip.textContent = randomHouse;

      tip.style = `
        border: 2px solid ${themeColor[randomHouse][1]};
        background-color: ${themeColor[randomHouse][0]};
        -webkit-text-stroke: 1px ${themeColor[randomHouse][1]};
        color: ${themeColor[randomHouse][0]};
      `;

      const notification = this.shadowRoot.querySelector('#notification');
      notification.style = `
        display: block;
      `;

      setTimeout(() => {
        navigateTo('house-search');
      }, 3000);
    });
  }
}

export default SortingHatSection;
