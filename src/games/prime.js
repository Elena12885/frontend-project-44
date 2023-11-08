import launchTheBrainGame from '../index.js';
import getRandomNumberRange from '../utils.js';

const isPrimeNumber = (number) => {
  for (let i = 2; i < number - 1; i += 1) {
    if (number % i === 0 && number !== 2) {
      return true;
    }
  }
  return false;
};

const determineTheParity = () => {
  const randomNumber = getRandomNumberRange();
  const question = randomNumber;
  const expectedAnswer = isPrimeNumber(randomNumber) ? 'no' : 'yes';
  return [question, expectedAnswer];
};

const launchTheBrainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const result = launchTheBrainGame(description, determineTheParity);
  return result;
};
export default launchTheBrainPrime;
