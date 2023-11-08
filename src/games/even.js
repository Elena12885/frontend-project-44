import launchTheBrainGame from '../index.js';
import getRandomNumberRange from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const determineTheParity = () => {
  const randomNumber = getRandomNumberRange();
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

const launchTheBrainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const result = launchTheBrainGame(description, determineTheParity);
  return result;
};

export default launchTheBrainEven;
