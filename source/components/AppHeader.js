import { normalize } from '../js/utils.js';
import { navigateTo } from '../js/navigation.js';
import { translate } from '../js/translation.js';


class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const style = new CSSStyleSheet();
    style.replaceSync(`
            header {
                font-size: 1rem;
                color: #fff;
                background-color: rgb(30, 41, 59, 0.5);
                backdrop-filter: blur(2px);
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                word-spacing: 0.125em;
                padding: 0.5rem;
                display: flex;
                flex-direction: row;
                align-items: center
            }

            #logo {
                display: flex;
                flex-direction: row;
                place-items: center;
                gap: 0.5rem;
                flex: none;
            }

            #settings {
                flex: 1;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
            }

            svg {
                width: 2rem;
            }

            h1:hover {
                cursor: pointer;
            }

            @media (min-width: 768px) {
                header {
                    font-size: 1.25rem;
                }
            }
        `);

    this.shadowRoot.innerHTML = `
            <header>

                <h1 id="home-redirect">Wizarding World of Fortune Telling</h1>

                <div id="settings">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
              
                </div>
            </header>
            <audio id="audioMusic" src="./audio/music_hedwigs_theme.mp3" autoplay loop></audio>
        `;

    const toggleHiddenEvent = new CustomEvent('toggleHidden');
    const triggerSvg = this.shadowRoot.querySelector('#settings > svg');
    let isMuted = false;

    triggerSvg.addEventListener('click', () => {
        isMuted = !isMuted;
        if (isMuted){
            this.shadowRoot.querySelector('#settings > svg').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" /></svg>'
            audioMusic.volume = 0;
        }
        else {
            this.shadowRoot.querySelector('#settings > svg').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg>'
            audioMusic.volume = 1;
        }
    });

    const audioMusic = this.shadowRoot.querySelector('#audioMusic');
    translate(navigator.language);

    this.shadowRoot
      .querySelector('#home-redirect')
      .addEventListener('click', () => {
        navigateTo('home');
      });
      
    this.shadowRoot.adoptedStyleSheets = [normalize, style];
  }
}

export default AppHeader;
