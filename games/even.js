import { launchTheBrainGame, getRandomNumberRange, getUserResponse } from './index.js';

const determineTheParity = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getChecking = () => {
  let result = ' ';
  for (let i = 0; i < 3; i += 1) {
    const random = getRandomNumberRange(2, 100);
    const rightAnswer = determineTheParity(random);
    result = getUserResponse(rightAnswer, random);
    if (result === 'false') {
      return result;
    }
  }
  return result;
};

const launchTheBrainEven = () => {
  const text = 'Answer "yes" if the number is even, otherwise answer "no".';
  const result = launchTheBrainGame(text, getChecking);
  return result;
};

export default launchTheBrainEven;
