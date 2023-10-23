import { getRandomNumberRange, launchTheBrainGame, } from '../index.js';

const getGreatestCommonDivisor = () => {
  const randomNumberOne = getRandomNumberRange();
  const randomNumberTwo = getRandomNumberRange();
  console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
  const smallerNumber = randomNumberOne < randomNumberTwo ? randomNumberOne : randomNumberTwo;
  let result = 0;
  for (let i = 1; i < smallerNumber + 1; i += 1) {
    if (randomNumberOne === randomNumberTwo) {
      result = randomNumberTwo;
    } else if (randomNumberOne % i === 0 && randomNumberTwo % i === 0) {
      result = i;
    }
  }
  return result;
};

const launchTheBrainGCD = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const result = launchTheBrainGame(description, getGreatestCommonDivisor);
  return result;
};

export default launchTheBrainGCD;
