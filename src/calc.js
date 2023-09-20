import readlineSync from 'readline-sync';
import { getRandomInt } from './index.js';

const getRandomOperator = (operators) => {
  const randomIndex = Math.floor(Math.random() * (operators.length - 1));
  const result = operators[randomIndex];
  return result;
};

const calculatingExpression = (numOne, operators, namTwo) => {
  let result = 0;
  if (operators === '+') {
    result = numOne + namTwo;
  } else if (operators === '-') {
    result = numOne - namTwo;
  } else if (operators === '*') {
    result = numOne * namTwo;
  }
  return String(result);
};

const userResponse = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = getRandomInt(100);
    const randomNumberTwo = getRandomInt(100);
    const operators = ['+', '-', '*'];
    const randomOperator = getRandomOperator(operators);
    const rightAnswer = calculatingExpression(randomNumberOne, randomOperator, randomNumberTwo);
    console.log(`Question: ${randomNumberOne} ${randomOperator} ${randomNumberTwo}`);
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
  console.log('What is the result of the expression?');
  if (userResponse() !== true) {
    return (`Let's try again, ${name}!`);
  }
  return (`Congratulations, ${name}!`);
};

export default brainGame;
