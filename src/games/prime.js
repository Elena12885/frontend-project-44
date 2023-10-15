import { launchTheBrainGame, getChecking } from '../index.js';

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

const checkAnswer = () => {
  return getChecking(getPrimeNumber);
};

const launchTheBrainPrime = () => {
  const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const result = launchTheBrainGame(text, checkAnswer);
  return result;
};
export default launchTheBrainPrime;
