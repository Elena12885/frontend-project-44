import { launchTheBrainGame, getRandomNumberRange } from '../index.js';

const determineTheParity = () => {
  const randomNumber = getRandomNumberRange();
  const result = (randomNumber % 2 === 0) ? 'yes': 'no';
  console.log(`Question: ${randomNumber}`);
  return result;
};

const launchTheBrainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const result = launchTheBrainGame(description, determineTheParity);
  return result;
};

export default launchTheBrainEven;
