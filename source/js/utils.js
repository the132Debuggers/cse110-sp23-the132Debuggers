const normalize = new CSSStyleSheet();
normalize.replaceSync(`
*,::before,::after {box-sizing: border-box;border-width: 0;border-style: solid;border-color: theme('borderColor.DEFAULT', currentColor);}::before,::after {--tw-content: '';}html {line-height: 1.5;-webkit-text-size-adjust: 100%;-moz-tab-size: 4;tab-size: 4;font-family: theme('fontFamily.sans',ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji');font-feature-settings: theme('fontFamily.sans[1].fontFeatureSettings',normal);font-variation-settings: theme('fontFamily.sans[1].fontVariationSettings',normal);}body {margin: 0;line-height: inherit;}hr {height: 0;color: inherit;border-top-width: 1px;}abbr:where([title]) {text-decoration: underline dotted;}h1,h2,h3,h4,h5,h6 {font-size: inherit;font-weight: inherit;}a {color: inherit;text-decoration: inherit;}b,strong {font-weight: bolder;}code,kbd,samp,pre {font-family: theme('fontFamily.mono',ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace);font-size: 1em;}small {font-size: 80%;}sub,sup {font-size: 75%;line-height: 0;position: relative;vertical-align: baseline;}sub {bottom: -0.25em;}sup {top: -0.5em;}table {text-indent: 0;border-color: inherit;border-collapse: collapse;}button,input,optgroup,select,textarea {font-family: inherit;font-size: 100%;font-weight: inherit;line-height: inherit;color: inherit;margin: 0;padding: 0;}button,select {text-transform: none;}button,[type='button'],[type='reset'],[type='submit'] {-webkit-appearance: button;background-color: transparent;background-image: none;}:-moz-focusring {outline: auto;}:-moz-ui-invalid {box-shadow: none;}progress {vertical-align: baseline;}::-webkit-inner-spin-button,::-webkit-outer-spin-button {height: auto;}[type='search'] {-webkit-appearance: textfield;outline-offset: -2px;}::-webkit-search-decoration {-webkit-appearance: none;}::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}summary {display: list-item;}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {margin: 0;}fieldset {margin: 0;padding: 0;}legend {padding: 0;}ol,ul,menu {list-style: none;margin: 0;padding: 0;}textarea {resize: vertical;}input::placeholder,textarea::placeholder {opacity: 1;color: theme('colors.gray.400', #9ca3af);}button,[role='button'] {cursor: pointer;}:disabled {cursor: default;}img,svg,video,canvas,audio,iframe,embed,object {display: block;vertical-align: middle;}img,video {max-width: 100%;height: auto;}[hidden] {display: none;}
`);

/**
 * Add twinkling stars to the background of the page.
 * @param {HTMLElement} injectedElement The element where the stars will be
 * injected.
 */
function twinkle(injectedElement) {
  const style = new CSSStyleSheet();
  style.replaceSync(`
        @keyframes twinkle {
          0% {
            background-color: rgba(255, 255, 255, 0);
            box-shadow: 0 0 0.125em 0.125em rgba(255, 255, 255, 0);
          }
  
          50% {
            background-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 0.125em 0.125em rgba(255, 255, 255, 0.8);
          }
  
          100% {
            background-color: rgba(255, 255, 255, 0);
            box-shadow: 0 0 0.125em 0.125em rgba(255, 255, 255, 0);
          }
        }
  
        .star {
          width: 0.25em;
          height: 0.25em;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(255, 255, 255, 0);
          border-radius: 100%;
          animation: twinkle 2s infinite;
          backdrop-filter: blur(2px);
          box-shadow: 0 0 0.125em 0.125em rgba(255, 255, 255, 0);
        }
    `);

  injectedElement.adoptedStyleSheets = [
    ...injectedElement.adoptedStyleSheets,
    style,
  ];
  const { offsetHeight: maxHeight, offsetWidth: maxWidth } =
    document.querySelector('main');
  for (let i = 0; i < 100; i++) {
    const el = document.createElement('div');
    el.classList.add('star');
    el.style.top = `${Math.random() * maxHeight - 16}px`;
    el.style.left = `${Math.random() * maxWidth - 16}px`;
    const size = Math.random() * 0.25;
    el.style.width = `${0.25 + size}em`;
    el.style.height = `${0.25 + size}em`;
    el.style.animationDelay = `${Math.random() * 10}s`;
    injectedElement.appendChild(el);
  }
}

export { normalize, twinkle };
