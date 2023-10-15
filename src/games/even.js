import { launchTheBrainGame, getChecking } from '../index.js';

const determineTheParity = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const checkAnswer = () => {
  return getChecking(determineTheParity);
};

const launchTheBrainEven = () => {
  const text = 'Answer "yes" if the number is even, otherwise answer "no".';
  const result = launchTheBrainGame(text, checkAnswer);
  return result;
};

export default launchTheBrainEven;
