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

const userResponse = () => {
  for (let i = 0; i < 3; i += 1) {
    const rightAnswer = getRandomInt(100);
    console.log('Question: ');
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
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  if (userResponse() !== true) {
    return (`Let's try again, ${name}!`);
  }
  return (`Congratulations, ${name}!`);
};

export {
  brainGame, getRandomInt, getSmallerNumber, getRandomNumberRange, randomIndex,
};
