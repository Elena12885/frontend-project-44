import readlineSync from 'readline-sync';
import { getRandomNumberRange } from './index.js';

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

const userResponse = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNumberRange(2, 100);
    const rightAnswer = getPrimeNumber(randomNum);
    console.log(`Question: ${randomNum}`);
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
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  if (userResponse() !== true) {
    return (`Let's try again, ${name}!`);
  }
  return (`Congratulations, ${name}!`);
};

export default brainGame;
