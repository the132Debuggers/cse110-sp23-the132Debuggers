let wordsList;
await fetch('./js/wordsList.json')
  .then((response) => response.json())
  .then((data) => {
    wordsList = data;
  });

export function replaceWords(
  inputString,
  dictionary,
  sourceLanguage,
  targetLanguage
) {
  if (
    Object.prototype.hasOwnProperty.call(dictionary, sourceLanguage) &&
    Object.prototype.hasOwnProperty.call(
      dictionary[sourceLanguage],
      inputString
    )
  ) {
    const translation = dictionary[sourceLanguage][inputString];
    if (Object.prototype.hasOwnProperty.call(translation, targetLanguage)) {
      return translation[targetLanguage];
    }
  }
  return inputString;
}

// Can't translate the output from Fortune Teller
export function translate(currentLanguage) {
  localStorage.setItem('currentLanguage', currentLanguage);
  const elements = document.querySelectorAll('*');
  elements.forEach((element) => {
    if (element.shadowRoot !== null) {
      element.shadowRoot
        .querySelectorAll('p, h1, h2, h3, h4, h5, div#notice')
        .forEach((words) => {
          words.innerHTML = replaceWords(
            words.innerHTML,
            wordsList,
            localStorage.getItem('previousLanguage'),
            currentLanguage
          );
        });
      if (element.shadowRoot.querySelector('input[type=text]') != null) {
        element.shadowRoot.querySelector('input[type=text]').placeholder =
          replaceWords(
            element.shadowRoot.querySelector('input[type=text]').placeholder,
            wordsList,
            localStorage.getItem('previousLanguage'),
            currentLanguage
          );
      }
    }
  });
}
