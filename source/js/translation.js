let wordsList;
/**
 * Fetches the words list from the JSON file
 */
await fetch('./js/wordsList.json')
  .then((response) => response.json())
  .then((data) => {
    wordsList = data;
  });

/**
 * Replace a string from a language to another according to a dictionary
 * @param {*} inputString The string to replace
 * @param {*} dictionary The dictionary to use for the replacement
 * @param {*} sourceLanguage The source language of the string
 * @param {*} targetLanguage The target language of the string
 * @returns The replaced string in the target language
 */
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
/**
 * Translates the page to the specified language
 * @param {*} currentLanguage The language to translate to
 */
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
