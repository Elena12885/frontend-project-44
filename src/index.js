import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomNumberRange = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

const getRandomIndex = (arr) => Math.floor(Math.random() * (arr.length - 1));

const getSmallerNumber = (numOne, numTwo) => {
  if (numOne < numTwo) {
    return numOne;
  }
  return numTwo;
};

const getUserResponse = (rightAnswer, question) => {
  console.log(`Question: ${question}`);
  const response = readlineSync.question('Your answer: ');
  if (response !== rightAnswer) {
    console.log(`${response} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    return ('false');
  }
  console.log('Correct!');
  return ('true');
};

const launchTheBrainGame = (text, result) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${text}`);
  if (result() !== 'true') {
    return console.log(`Let's try again, ${name}!`);
  }
  return console.log(`Congratulations, ${name}!`);
};

export {
  launchTheBrainGame, getRandomInt, getSmallerNumber,
  getRandomNumberRange, getRandomIndex, getUserResponse,
};
