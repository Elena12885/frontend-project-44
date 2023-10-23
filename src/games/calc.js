import { launchTheBrainGame, getRandomNumberRange } from '../index.js';

const calculateTheExpression = () => {
  const randomNumberOne = getRandomNumberRange();
  const randomNumberTwo = getRandomNumberRange();
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumberRange(0, operators.length - 1)];
  console.log(`Question: ${randomNumberOne} ${randomOperator} ${randomNumberTwo}`);
  switch (randomOperator) {
    case '+':
      return randomNumberOne + randomNumberTwo;
    case '-':
      return randomNumberOne - randomNumberTwo;
    case '*':
      return randomNumberOne * randomNumberTwo;
    default: 
      throw new Error(`Calculations with the operator '${operators}' are not possible.`);
  }
};

const launchTheBrainCalc = () => {
  const description = 'What is the result of the expression?';
  const result = launchTheBrainGame(description, calculateTheExpression);
  return result;
};

export default launchTheBrainCalc;
