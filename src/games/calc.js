import launchTheBrainGame from '../index.js';
import getRandomNumberRange from '../utils.js';

const calculateTheExpression = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      throw new Error(`Calculations with the operator '${operator}' are not possible.`);
  }
};

const expectedAnswer = () => {
  const randomNumberOne = getRandomNumberRange();
  const randomNumberTwo = getRandomNumberRange();
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumberRange(0, operators.length - 1)];
  const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  const result = String(calculateTheExpression(randomNumberOne, randomNumberTwo, randomOperator));
  return [question, result];
};

const launchTheBrainCalc = () => {
  const description = 'What is the result of the expression?';
  const result = launchTheBrainGame(description, expectedAnswer);
  return result;
};

export default launchTheBrainCalc;
