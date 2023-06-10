import query from '../js/fortunes.js';
// import { navigateTo } from '../js/navigation.js';
import { normalize, themeColor } from '../js/utils.js';

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

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

        #text-area {
            width: 100%;
            display: flex;
            color: ${themeColor[house][1]};
            place-content: center;
            place-items: center;
        }

        #text-area > div {
            width: 100%;
            padding: 0.5rem;
            border-radius: 0.5rem;
            max-width: 36rem;
            background-color: ${themeColor[house][0]};
            border: 2px solid ${themeColor[house][1]};
            font-size: 1.5rem;
            place-content: center;
            place-items: center;
        }

        #question {
            display: flex;
            flex-direction: row;
            gap: 0.25rem;
        }

        #answer {
            display: none;
            flex-direction: column;
            place-content: center;
            place-items: center;
        }

        input[type="text"] {
            flex: 1;
            background-color: transparent;
            border: none;
        }

        input[type="text"]:focus {
            outline: none;
        }

        input[type="text"]::placeholder {
            color: ${themeColor[house][1]};
        }

        #question > svg{
            margin-left: 0.2rem;
            margin-right: -0.2rem;
        }

        svg {
            width: 2rem;
            color: ${themeColor[house][1]};
        }

        #text-area svg:hover {
            cursor: pointer;
        }

        #restart {
            visibility: hidden;
            margin-top: -1rem;
            display: flex;
            align-items: center;
            font-size: 1.2rem;
        }

        svg + p {
            margin-left: 0.3rem;
        }

        #restart:hover {
            cursor: pointer;
        }

        p#fortune {
            width: 15ch;
            animation: typing 2s steps(16), blink .6s step-end infinite alternate;
            white-space: nowrap;
            overflow: hidden;
            justify-content: center;
            border-right: 2px solid ${themeColor[house][1]};
          }

        @keyframes typing {
            from{
                width: 0;
            }
        }

        @keyframes blink {
            50% {
                border-color: transparent
            }
        }

        @media (max-width: 768px) {
            :host {
                place-content: flex-start;
            }

            img {
                width: 15rem;
            }
        }
    `);
    this.shadowRoot.adoptedStyleSheets = [normalize, style];

    this.shadowRoot.innerHTML = `
<<<<<<< HEAD
        <audio id="bgm" src="./sounds/${house}_bgm.mp3" autoplay loop></audio>
=======
        <audio id="bgm" src="./sounds/house_bgm/${house}_bgm.mp3" autoplay loop></audio>
>>>>>>> ddfaba2 (Added bgm to 4 houses)
        <div id="avatar">
            <img src="./images/${house}/avatar.webp" alt="${house}'s avatar" />
        </div>
        <div id="text-area">
            <div id="question">
                <input type="text" placeholder="Text Here..." /> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <div id="answer">
                <p id="fortune">Casting spells...</p>
                <div id="restart">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </div>
            </div>
        </div>
    `;
    const question = this.shadowRoot.querySelector('#question');
    const input = question.querySelector('input');
    const questionButton = question.querySelector('svg');
    const answer = this.shadowRoot.querySelector('#answer');
    const restartButton = this.shadowRoot.querySelector('#restart');
    const fortune = answer.querySelector('#fortune');
    const audio = new Audio(`./sounds/spells-${house}.mp3`);
    // const audio2 = new Audio('./sounds/windsound.mp3');
    const synth = window.speechSynthesis;
    const bgm = this.shadowRoot.getElementById('bgm');

    bgm.volume = 0.1;

    const handleInput = async () => {
      const text = input.value.trim();
      if (!text) {
        return;
      }
      input.value = '';

      question.style.display = 'none';
      answer.style.display = 'flex';
      audio.play();

      const result = await query(text, house);
      await wait(1500);

      fortune.id = 'response';
      fortune.textContent = '';
      answer.style.placeItems = 'start';

      let index = 0;
      async function printNextCharacter() {
        const utterance = new SpeechSynthesisUtterance(result);
        utterance.rate = 0.85;
        synth.speak(utterance);

        while (index < result.length) {
          fortune.textContent += result.charAt(index);
          index++;
          // eslint-disable-next-line no-await-in-loop
          await wait(50);
        }
        // synth.cancel();
      }
      await printNextCharacter();
      restartButton.style.visibility = 'visible';
    };

    questionButton.addEventListener('click', handleInput);

    input.addEventListener('keydown', async (event) => {
      if (event.key === 'Enter') {
        await handleInput();
      }
    });

    restartButton.addEventListener('click', () => {
      answer.style.display = 'none';
      answer.style.placeItems = 'center';
      question.style.display = 'flex';
      restartButton.style.visibility = 'hidden';
      fortune.textContent = 'Casting Spells...';
      fortune.id = 'fortune';

      this.connectedCallback();
    });
    this.connectedCallback();
  }

  connectedCallback() {
    setTimeout(() => {
      const input = this.shadowRoot.querySelector('input');
      input.focus();
    }, 0);
  }
}

export default HouseSearchSection;
