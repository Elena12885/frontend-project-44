import readlineSync from 'readline-sync';
import { getRandomNumberRange, getSmallerNumber } from './index.js';

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

const userResponse = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = getRandomNumberRange(1, 100);
    const randomNumberTwo = getRandomNumberRange(1, 100);
    const rightAnswer = greatestCommonDivisor(randomNumberOne, randomNumberTwo);
    console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
    const response = readlineSync.question('Your answer: ');
    if (response !== rightAnswer) {
      console.log(`${response} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

const brainGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  if (userResponse() !== true) {
    return (`Let's try again, ${name}!`);
  }
  return (`Congratulations, ${name}!`);
};

export default brainGame;
