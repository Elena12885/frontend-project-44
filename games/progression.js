import {
  getRandomInt, getRandomNumberRange, randomIndex, brainGame, userResponse,
} from './index.js';

const arithmeticProgression = () => {
  const firstNuber = getRandomInt(20);
  const arrayRange = getRandomNumberRange(5, 10);
  const preiod = getRandomNumberRange(1, 10);
  const result = [];
  for (let i = 0; i < arrayRange; i += 1) {
    result[0] = firstNuber;
    result.push(result[i] + preiod);
  }
  return result;
};

const gethiddenNumberArr = (arr, randomInd) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const hiddenNumber = (randomInd === arr[i]) ? '..' : arr[i];
    result.push(hiddenNumber);
  }
  return result.join(' ');
};

const getChecking = () => {
  let result = ' ';
  for (let i = 0; i < 3; i += 1) {
    const str = arithmeticProgression();
    const randomInd = str[randomIndex(str)];
    const rightAnswer = randomInd.toString();
    const arr = gethiddenNumberArr(str, randomInd);
    result = userResponse(rightAnswer, arr);
    if (result === 'false') {
      return result;
    }
  }
  return result;
};

const brainProgression = () => {
  const text = 'What number is missing in the progression?';
  const result = brainGame(text, getChecking);
  return result;
};

export default brainProgression;
