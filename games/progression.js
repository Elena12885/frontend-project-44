import readlineSync from 'readline-sync';
import { getRandomInt, getRandomNumberRange, randomIndex } from './index.js';

const arithmeticProgression = () => {
  const firstNuber = getRandomInt(20);
  const arrayRange = getRandomNumberRange(5, 10);
  const preiod = getRandomNumberRange(1, 10);
  const result = [];
  for (let i = 0; i < arrayRange; i += 1) {
    result[0] = firstNuber;
    result.push(result[i] + preiod);
  }
  return result;
};

const gethiddenNumberArr = (arr, randomInd) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const hiddenNumber = (randomInd === arr[i]) ? '..' : arr[i];
    result.push(hiddenNumber);
  }
  return result.join(' ');
};

const userResponse = () => {
  for (let i = 0; i < 3; i += 1) {
    const str = arithmeticProgression();
    const randomInd = str[randomIndex(str)];
    const rightAnswer = randomInd.toString();
    const arr = gethiddenNumberArr(str, randomInd);
    console.log(`Question: ${arr}`);
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
  console.log('What number is missing in the progression?');
  if (userResponse() !== true) {
    return (`Let's try again, ${name}!`);
  }
  return (`Congratulations, ${name}!`);
};

export default brainGame;
