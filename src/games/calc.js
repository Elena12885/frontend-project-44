import { launchTheBrainGame, getRandNumRange } from '../index.js';

const calculateTheExpression = () => {
  const randomNumberOne = getRandNumRange();
  const randomNumberTwo = getRandNumRange();
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandNumRange(0, operators.length - 1)];
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
