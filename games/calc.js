import { getRandomInt, brainGame, userResponse } from './index.js';

const getRandomOperator = (operators) => {
  const randomIndex = Math.floor(Math.random() * (operators.length - 1));
  const result = operators[randomIndex];
  return result;
};

const calculatingExpression = (numOne, operators, namTwo) => {
  let result = 0;
  switch (operators) {
    case '+':
      result = numOne + namTwo;
      break;
    case '-':
      result = numOne - namTwo;
      break;
    case '*':
      result = numOne * namTwo;
      break;
    default: console.log(`Calculations with the operator '${operators}' are not possible.`);
      break;
  }
  return String(result);
};

const getChecking = () => {
  let result = ' ';
  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = getRandomInt(100);
    const randomNumberTwo = getRandomInt(100);
    const operators = ['+', '-', '*'];
    const randomOperator = getRandomOperator(operators);
    const rightAnswer = calculatingExpression(randomNumberOne, randomOperator, randomNumberTwo);
    const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
    result = userResponse(rightAnswer, question);
    if (result === 'false') {
      return result;
    }
  }
  return result;
};

const brainCalc = () => {
  const text = 'What is the result of the expression?';
  const result = brainGame(text, getChecking);
  return result;
};

export default brainCalc;
