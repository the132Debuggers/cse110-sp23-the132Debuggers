import { normalize } from '../js/utils.js';
import { translate } from '../js/translation.js';

class SettingsMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const style = new CSSStyleSheet();
    style.replaceSync(`
            :host{
                flex: none;
                z-index: 50;
            }
            #settingsMenu{
                border-radius: 1rem;
                position:fixed;
                right:1rem;
                width:30rem;
                height:20rem;
                background-color: rgba(162, 162, 162, 0.8);
                font-family:'Inter';
                color:black;
            }
  
            #settingsMenu h1{
                display:inline;
                font-size:1.5rem;
                padding-left:2rem;
                padding-right:1rem;

            }

 
  
            .slidercontainer{
                display:flex;
                padding-left:5rem;
                padding-bottom:1.5rem;
                font-size:1.2rem;
                padding-top:1rem;
            }

            .slidercontainer p{
                padding-left:1rem;
                width:3rem;
            }
            .slidercontainer input{
                margin:auto;
            }
          
            .slider {
                -webkit-appearance: none;
                width: 50%;
                height: 0.7rem;
                border-radius: 1rem;
                background: #d3d3d3;
                outline: none;
                opacity: 0.7;
                -webkit-transition: .2s;
                transition: opacity .2s;
            }

            .slider:hover {
                opacity: 1;
            }
            
            .slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                background: #000000;
                cursor: pointer;
            }
          
            .slider::-moz-range-thumb {
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                background: #000000;
                cursor: pointer;
            }
            select#language{
                display: inline-block;
                vertical-align: middle;
                height: 1.5rem;
                width: 15rem;
                text-align: center;
                background: #d3d3d3;
            }
        `);

    this.shadowRoot.innerHTML = `
            <div id="settingsMenu" hidden>
            <br>
            <br>
                <h1>Volume</h1>
                <div class="slidercontainer">
                    <svg width="30" height="30" viewBox="0 0 78 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.8632 12.771C70.1365 16.7407 72.733 21.4534 74.5045 26.6401C76.276 31.8268 77.1878 37.3859 77.1878 43C77.1878 48.614 76.276 54.1731 74.5045 59.3598C72.733 64.5465 70.1365 69.2592 66.8632 73.229M56.4801 25.368C60.3356 30.0445 62.5015 36.3868 62.5015 43C62.5015 49.6131 60.3356 55.9554 56.4801 60.632M18.4375 25.1875L36.9242 2.76745C37.335 2.26986 37.8582 1.93107 38.4277 1.79387C38.9971 1.65667 39.5874 1.72721 40.1238 1.99659C40.6602 2.26597 41.1188 2.7221 41.4416 3.30738C41.7644 3.89265 41.937 4.58081 41.9375 5.28495V80.715C41.937 81.4191 41.7644 82.1073 41.4416 82.6925C41.1188 83.2778 40.6602 83.7339 40.1238 84.0033C39.5874 84.2727 38.9971 84.3432 38.4277 84.206C37.8582 84.0688 37.335 83.73 36.9242 83.2325L18.4375 60.8125H9.66419C6.21752 60.8125 2.99018 58.4042 2.07368 54.381C1.23363 50.6732 0.809428 46.8451 0.812517 43C0.812517 39.0575 1.25118 35.2432 2.07368 31.619C2.99018 27.591 6.21752 25.1875 9.66419 25.1875H18.4375Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>          
                    <p>SFX</p>
                    <input type="range" min="0" max="100" value="50" class="slider" id="sfxRange">
                </div>
                <div class="slidercontainer">
                    <svg width="30" height="30" viewBox="0 0 58 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.8748 30.75L57.0623 17.5M57.0623 46.4424V63.0049C57.0619 65.1642 56.4976 67.2646 55.4547 68.9882C54.4119 70.7119 52.9472 71.9651 51.2823 72.5582L46.6073 74.2232C45.7967 74.5287 44.9454 74.6301 44.1031 74.5214C43.2608 74.4128 42.4443 74.0963 41.701 73.5904C40.9577 73.0845 40.3025 72.3993 39.7735 71.5746C39.2446 70.75 38.8525 69.8024 38.62 68.7869C38.3874 67.7715 38.3192 66.7086 38.4192 65.6599C38.5192 64.6113 38.7855 63.598 39.2025 62.6789C39.6195 61.7598 40.1789 60.9533 40.8482 60.3064C41.5175 59.6595 42.2833 59.185 43.101 58.9107L51.2823 55.9957C52.9472 55.4026 54.4119 54.1494 55.4547 52.4257C56.4976 50.7021 57.0619 48.6017 57.0623 46.4424ZM57.0623 46.4424V0.9375L19.8748 14.1875V59.6924M19.8748 59.6924V76.2549C19.8744 78.4142 19.3101 80.5146 18.2672 82.2382C17.2244 83.9619 15.7597 85.2151 14.0948 85.8082L9.41977 87.4732C7.80071 88.0165 6.07527 87.7439 4.61602 86.7142C3.15677 85.6846 2.0808 83.9805 1.62044 81.97C1.16007 79.9595 1.35226 77.8038 2.15549 75.9685C2.95872 74.1332 4.30855 72.7655 5.91352 72.1607L14.0948 69.2457C15.7597 68.6526 17.2244 67.3994 18.2672 65.6757C19.3101 63.9521 19.8744 61.8517 19.8748 59.6924Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <p>Music</p>
                    <input type="range" min="0" max="100" value="50" class="slider" id="musicRange">
                </div>

                <h1>Language</h1>
                <select id="language">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                </select>
            </div>
            <audio id="audioMusic" class="hidden" src="./audio/music_hedwigs_theme.mp3" autoplay loop></audio>

        `;

    this.shadowRoot.adoptedStyleSheets = [normalize, style];

    const settingsMenu = this.shadowRoot.querySelector('#settingsMenu');
    document.addEventListener('toggleHidden', () => {
      settingsMenu.hidden = !settingsMenu.hidden;
    });

    const audioMusic = this.shadowRoot.querySelector('#audioMusic');
    const sliderMusic = this.shadowRoot.querySelector('#musicRange');
    function volumeMusic() {
      audioMusic.volume = sliderMusic.value / 100;
    }
    sliderMusic.addEventListener('input', volumeMusic);

    const audioSfx = this.shadowRoot.querySelector('#audioSfx');
    const sliderSfx = this.shadowRoot.querySelector('#sfxRange');

    function volumeSfx() {
      audioSfx.volume = sliderSfx.value / 100;
    }
    sliderSfx.addEventListener('input', volumeSfx);

    const language = this.shadowRoot.querySelector('#language');
    language.value = localStorage.getItem('currentLanguage');
    language.addEventListener('mousedown', () => {
      localStorage.setItem('previousLanguage', language.value);
    });
    language.addEventListener('change', () => {
      localStorage.setItem('currentLanguage', language.value);
      translate(language.value);
    });
  }
}
export default SettingsMenu;
