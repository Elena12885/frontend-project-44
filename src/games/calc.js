import launchTheBrainGame from '../index.js';
import { getRandNumRange } from '../utils.js';

const calculateTheExpression = (numOne, numTwo, operator) => {
  switch (operator) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      throw new Error(`Calculations with the operator '${operator}' are not possible.`);
  }
};

const expectedAnswer = () => {
  const randomNumberOne = getRandNumRange();
  const randomNumberTwo = getRandNumRange();
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandNumRange(0, operators.length - 1)];
  const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  const result = calculateTheExpression(randomNumberOne, randomNumberTwo, randomOperator);
  return [question, result];
};

const launchTheBrainCalc = () => {
  const description = 'What is the result of the expression?';
  const result = launchTheBrainGame(description, expectedAnswer);
  return result;
};

export default launchTheBrainCalc;
