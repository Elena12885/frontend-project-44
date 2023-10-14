import { getRandomNumberRange, brainGame, userResponse } from './index.js';

const getPrimeNumber = (number) => {
  let result = ' ';
  if (number === 2) {
    return 'yes';
  }
  for (let i = 2; i < number - 1; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
    result = 'yes';
  }
  return result;
};

const getChecking = () => {
  let result = ' ';
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNumberRange(2, 100);
    const rightAnswer = getPrimeNumber(randomNum);
    result = userResponse(rightAnswer, randomNum);
    if (result === 'false') {
      return result;
    }
  }
  return result;
};

const brainPrime = () => {
  const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const result = brainGame(text, getChecking);
  return result;
};
export default brainPrime;
