import { brainGame, getRandomNumberRange, userResponse } from './index.js';

const determiningTheParity = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getChecking = () => {
  let result = ' ';
  for (let i = 0; i < 3; i += 1) {
    const random = getRandomNumberRange(2, 100);
    const rightAnswer = determiningTheParity(random);
    result = userResponse(rightAnswer, random);
    if (result === 'false') {
      return result;
    }
  }
  return result;
};

const brainEven = () => {
  const text = 'Answer "yes" if the number is even, otherwise answer "no".';
  const result = brainGame(text, getChecking);
  return result;
};

export default brainEven;
