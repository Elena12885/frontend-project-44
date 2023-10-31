import launchTheBrainGame from '../index.js';
import { getRandNumRange } from '../utils.js';

const getArithmeticProgression = (firstNuber, arrayRange, preiod) => {
  const result = [];
  for (let i = 0; i < arrayRange; i += 1) {
    result[0] = firstNuber;
    result.push(result[i] + preiod);
  }
  return result;
};

const getHiddenNumberArr = () => {
  const firstNuber = getRandNumRange(0, 20);
  const arrayRange = getRandNumRange(5, 10);
  const preiod = getRandNumRange(1, 10);
  const arr = getArithmeticProgression(firstNuber, arrayRange, preiod);
  const randomInd = arr[getRandNumRange(0, arr.length - 1)];
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const hiddenNumber = (randomInd === arr[i]) ? '..' : arr[i];
    result.push(hiddenNumber);
  }
  const question = result.join(' ');
  return [question, randomInd];
};

const launchTheBrainProgression = () => {
  const description = 'What number is missing in the progression?';
  const result = launchTheBrainGame(description, getHiddenNumberArr);
  return result;
};

export default launchTheBrainProgression;
