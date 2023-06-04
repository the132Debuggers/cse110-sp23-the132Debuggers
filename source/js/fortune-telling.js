const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function predictFuture(hogwartsHouse, question) {
  const houseTraits = {
    gryffindor: 'brave and noble',
    hufflepuff: 'loyal and hardworking',
    ravenclaw: 'wise and curious',
    slytherin: 'ambitious and cunning',
  };

  const prompt = `You are a fortune teller in the world of harry potter.
  Your task is only to answer questions from wizards and witches about their future.
  Given the question delimited by ''', generate a reponse to the witches or wizards question.
  If the question is anything but a question about the wizard/witch's future, respond with "This is not a question about your future, and as a fortune teller I cannot answer this. Try again with a question about your future".
  If the question is a question about the wizard/witch's future, answer the question by predicting the future. 
  The wizard/witch is from hogwarts house ${hogwartsHouse} and people from ${hogwartsHouse} house are known to be ${houseTraits[hogwartsHouse]}. 
  Predict the future of this person based on what you know of their personality and the fact that they go to Hogwarts school in the world of Harry Potter.
  Try to include specific elements of the magical harry potter world in your reponse
  Question: '''${question}''' 
  `;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 50,
    temperature: 0.6,
  });

  const prediction = response.data.choices[0].text;
  return prediction;
}

// Example usage
const hogwartsHouse = 'hufflepuff'; // Replace with the user's Hogwarts house
const question = 'What is my future career?'; // Replace with the user's question
predictFuture(hogwartsHouse, question)
  .then((prediction) => {
    console.log('Prediction:', prediction);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
