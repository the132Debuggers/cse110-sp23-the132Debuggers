import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const houseTraits = {
  gryffindor: 'brave and noble',
  hufflepuff: 'loyal and hardworking',
  ravenclaw: 'wise and curious',
  slytherin: 'ambitious and cunning',
};

async function query(question, hogwartsHouse) {
  const prompt = `You are a fortune teller in the world of harry potter.
    Your task is to answer questions delimited by ''' about someone's future.
    If the question is a question about someone's future, answer the question by predicting the future in one sentence, shorter than 50 words. 
    Now, I am from hogwarts house ${hogwartsHouse} and people from ${hogwartsHouse} house are known to be ${houseTraits[hogwartsHouse]}. 
    Predict my future based on what you know of their personality and the fact that they go to Hogwarts school in the world of Harry Potter.
    Try to include specific elements of the magical harry potter world in your reponse.
    Question: '''${question}'''
    `;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 50,
    temperature: 0.6,
  });

  const result = response.data.choices[0].text;
  return result.trim();
}

export default async function handler(request, response) {
  const { house } = request.query;
  const { question } = request.body;
  const result = await query(question, house);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.status(200).json({
    answer: result,
  });
}
