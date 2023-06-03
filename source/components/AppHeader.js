import { normalize } from '../js/utils.js';
import { navigateTo } from '../js/navigation.js';


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
                <a href="https://github.com/the132Debuggers/cse110-sp23-the132Debuggers" id="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                </a>

                <h1 id="home-redirect">Wizarding World of Fortune Telling</h1>

                <div id="settings">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                    </svg>
                </div>
            </header>
        `;

        (this.shadowRoot.querySelector("#home-redirect")).addEventListener('click', () => {
            navigateTo('home');
        });

        this.shadowRoot.adoptedStyleSheets = [normalize, style];
    }
}

export default AppHeader;
