/**
 * Queries the model for an answer to the question.
 * @param {string} input The question to ask the model.
 * @param {string} house The house of the user.
 * @returns {Promise<string>} The answer to the question.
 */
export default async function query(input, house) {
  const response = await fetch('https://cse110-sp23-group9.vercel.app/api', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      house,
      question: input,
    }),
  });
  const result = (await response.json()).answer;
  return result;
}
