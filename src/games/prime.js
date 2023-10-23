import { launchTheBrainGame, getRandomNumberRange, } from '../index.js';

const getPrimeNumber = () => {
  const randomNumber = getRandomNumberRange();
  console.log(`Question: ${randomNumber}`);
  let result = ' ';
  if (randomNumber === 2) {
    return 'yes';
  }
  for (let i = 2; i < randomNumber - 1; i += 1) {
    if (randomNumber % i === 0) {
      return 'no';
    }
    result = 'yes';
  }
  return result;
};

const launchTheBrainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const result = launchTheBrainGame(description, getPrimeNumber);
  return result;
};
export default launchTheBrainPrime;
