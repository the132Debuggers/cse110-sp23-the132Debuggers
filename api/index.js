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
  const prompt = `You are a fortune teller.
    The user is from hogwarts house ${hogwartsHouse} and people from ${hogwartsHouse} house are known to be ${houseTraits[hogwartsHouse]}. 
    Predict user's future based on what you know of their traits and the that they go to Hogwarts school in the world of Harry Potter.
    Your response has a maximum of 20 words with complete sentences.
    Question: '''${question}''' 
    `;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    temperature: 0.6,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });

  const result = response.data.choices[0].text;
  return result.trim();
}

async function handler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }
  const { question, house } = request.body;
  const result = await query(question, house);
  response.status(200);
  response.json({
    answer: result,
    house,
    question,
  });
}

export default handler;
