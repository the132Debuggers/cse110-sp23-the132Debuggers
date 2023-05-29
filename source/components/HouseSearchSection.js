import { normalize, themeColor } from '../js/utils.js';

class HouseSearchSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const house = localStorage.getItem('house') || 'gryffindor';

    const style = new CSSStyleSheet();
    style.replaceSync(`
        :host {
            height: 100%;
            display: flex;
            flex-direction: column;
            place-content: center;
            place-items: center;
            gap: 2rem;
        }

        img {
            width: 20rem;
        }

        #input-area {
            display: flex;
            flex-direction: row;
            place-content: center;
            place-items: center;
            padding: 0.5rem;
            gap: 0.25rem;
            border-radius: 0.5rem;
            width: 100%;
            max-width: 36rem;
            background-color: ${themeColor[house][0]};
            border: 2px solid ${themeColor[house][1]};
            font-size: 1.5rem;
        }

        input[type="text"] {
            flex: 1;
            background-color: transparent;
            border: none;
            color: ${themeColor[house][1]};
        }

        input[type="text"]::placeholder {
            color: ${themeColor[house][1]};
        }

        svg {
            width: 2rem;
            color: ${themeColor[house][1]};
        }
    `);
    this.shadowRoot.adoptedStyleSheets = [normalize, style];

    this.shadowRoot.innerHTML = `
        <div id="avatar">
            <img src="./images/${house}/avatar.webp" alt="${house}'s avatar" />
        </div>
        <div id="input-area">
            <input type="text" placeholder="Text Here..." /> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </div>
    `;
  }
}

export default HouseSearchSection;
