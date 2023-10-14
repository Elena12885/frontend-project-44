import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomNumberRange = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

const randomIndex = (arr) => Math.floor(Math.random() * (arr.length - 1));

const getSmallerNumber = (numOne, numTwo) => {
  if (numOne < numTwo) {
    return numOne;
  }
  return numTwo;
};

const userResponse = (rightAnswer, question) => {
  console.log(`Question: ${question}`);
  const response = readlineSync.question('Your answer: ');
  if (response !== rightAnswer) {
    console.log(`${response} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    return ('false');
  }
  console.log('Correct!');
  return ('true');
};

const brainGame = (text, result) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${text}`);
  if (result() !== 'true') {
    return (`Let's try again, ${name}!`);
  }
  return (`Congratulations, ${name}!`);
};

export {
  brainGame, getRandomInt, getSmallerNumber, getRandomNumberRange, randomIndex, userResponse,
};
