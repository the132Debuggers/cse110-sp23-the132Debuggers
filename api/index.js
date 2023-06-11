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
    Your task is only to answer questions from wizards and witches about their future.
    Given the question delimited by ''', generate a response to the witches or wizards question.
    If the question is anything but a question about the wizard/witch's future, respond with "This is not a question about your future, and as a fortune teller I cannot answer this. Try again with a question about your future".
    If the question is a question about the wizard/witch's future, answer the question by predicting the future. 
    The wizard/witch is from hogwarts house ${hogwartsHouse} and people from ${hogwartsHouse} house are known to be ${houseTraits[hogwartsHouse]}. 
    Predict the future of this person based on what you know of their personality and the fact that they go to Hogwarts school in the world of Harry Potter.
    Try to include specific elements of the magical harry potter world in your reponse.
    Your response has to be 350 characters long or less.
    Question: '''${question}''' 
    `;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 100,
    temperature: 0.6,
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
