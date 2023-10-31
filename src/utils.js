const getRandNumRange = (min = 2, max = 100) => (Math.floor(Math.random() * (max - min + 1)) + min);

const isEven = (number) => (number % 2 === 0);

const calculateTheExpression = (numOne, numTwo, operator) => {
  console.log(`Question: ${numOne} ${operator} ${numTwo}`);
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

export { getRandNumRange, isEven, calculateTheExpression };
