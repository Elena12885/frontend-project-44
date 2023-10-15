import {
  getRandomInt, getRandomNumberRange, getRandomIndex, launchTheBrainGame, getUserResponse,
} from './index.js';

const getArithmeticProgression = () => {
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

const getHiddenNumberArr = (arr, randomInd) => {
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
    const str = getArithmeticProgression();
    const randomInd = str[getRandomIndex(str)];
    const rightAnswer = randomInd.toString();
    const arr = getHiddenNumberArr(str, randomInd);
    result = getUserResponse(rightAnswer, arr);
    if (result === 'false') {
      return result;
    }
  }
  return result;
};

const launchTheBrainProgression = () => {
  const text = 'What number is missing in the progression?';
  const result = launchTheBrainGame(text, getChecking);
  return result;
};

export default launchTheBrainProgression;
