import { tones } from './utils.js';

/**
 *
 * @param {string} input The question to ask the model.
 * @param {string} house The house of the user.
 * @returns {Promise<string>} The answer to the question.
 */
export default async function query(input, house) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
    {
      headers: {
        Authorization: 'Bearer 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',
      },
      method: 'POST',
      body: JSON.stringify({
        inputs: {
          past_user_inputs: [`Can you tell my fortune in ${tones[house]} tone?`],
          generated_responses: ['I can try. What is your question?'],
          text: input,
        },
        use_cache: true,
      }),
    }
  );
  const result = (await response.json()).generated_text;
  return result;
}
