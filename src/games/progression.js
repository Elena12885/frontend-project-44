import {
  getRandomNumberRange, launchTheBrainGame,
} from '../index.js';

const getArithmeticProgression = () => {
  const firstNuber = getRandomNumberRange(0, 20);
  const arrayRange = getRandomNumberRange(5, 10);
  const preiod = getRandomNumberRange(1, 10);
  const result = [];
  for (let i = 0; i < arrayRange; i += 1) {
    result[0] = firstNuber;
    result.push(result[i] + preiod);
  }
  return result;
};

const getHiddenNumberArr = () => {
  const arr = getArithmeticProgression();
  const randomInd = arr[getRandomNumberRange(0, arr.length - 1)];
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const hiddenNumber = (randomInd === arr[i]) ? '..' : arr[i];
    result.push(hiddenNumber);
  }
  console.log(`Question: ${result.join(' ')}`);
  return randomInd;
};

const launchTheBrainProgression = () => {
  const description = 'What number is missing in the progression?';
  const result = launchTheBrainGame(description, getHiddenNumberArr);
  return result;
};

export default launchTheBrainProgression;
