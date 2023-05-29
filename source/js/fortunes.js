/**
 *
 * @param {string} input The question to ask the model.
 * @returns {Promise<string>} The answer to the question.
 */
export default async function query(input) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
    {
      headers: {
        Authorization: 'Bearer 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',
      },
      method: 'POST',
      body: JSON.stringify({
        inputs: {
          past_user_inputs: ['Can you tell my fortune in positive tone?'],
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
