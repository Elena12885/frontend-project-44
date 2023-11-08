import launchTheBrainGame from '../index.js';
import getRandomNumberRange from '../utils.js';

const getGreatestCommonDivisor = (numberOne, numberTwo) => {
  const smallerNumber = numberOne < numberTwo ? numberOne : numberTwo;
  let result = 0;
  for (let i = 1; i < smallerNumber + 1; i += 1) {
    if (numberOne === numberTwo) {
      result = numberTwo;
    } else if (numberOne % i === 0 && numberTwo % i === 0) {
      result = i;
    }
  }
  return result;
};

const expectedAnswer = () => {
  const randomNumberOne = getRandomNumberRange();
  const randomNumberTwo = getRandomNumberRange();
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const result = String(getGreatestCommonDivisor(randomNumberOne, randomNumberTwo));
  return [question, result];
};

const launchTheBrainGCD = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const result = launchTheBrainGame(description, expectedAnswer);
  return result;
};

export default launchTheBrainGCD;
