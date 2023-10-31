import launchTheBrainGame from '../index.js';
import { getRandNumRange, isEven } from '../utils.js';

const determineTheParity = () => {
  const randomNumber = getRandNumRange();
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

const launchTheBrainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const result = launchTheBrainGame(description, determineTheParity);
  return result;
};

export default launchTheBrainEven;
