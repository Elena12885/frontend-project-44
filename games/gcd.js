import {
  getRandomNumberRange, getSmallerNumber, brainGame, userResponse,
} from './index.js';

const greatestCommonDivisor = (numOne, numTwo) => {
  const smallerNumber = getSmallerNumber(numOne, numTwo);
  let result = 0;
  for (let i = 1; i < smallerNumber + 1; i += 1) {
    if (numOne === numTwo) {
      result = numTwo;
    } else if (numOne % i === 0 && numTwo % i === 0) {
      result = i;
    }
  }
  return String(result);
};

const getChecking = () => {
  let result = ' ';
  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = getRandomNumberRange(1, 100);
    const randomNumberTwo = getRandomNumberRange(1, 100);
    const question = `${randomNumberOne} ${randomNumberTwo}`;
    const rightAnswer = greatestCommonDivisor(randomNumberOne, randomNumberTwo);
    result = userResponse(rightAnswer, question);
    if (result === 'false') {
      return result;
    }
  }
  return result;
};

const brainGCD = () => {
  const text = 'Find the greatest common divisor of given numbers.';
  const result = brainGame(text, getChecking);
  return result;
};

export default brainGCD;
