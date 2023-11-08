import launchTheBrainGame from '../index.js';
import getRandomNumberRange from '../utils.js';

const getArithmeticProgression = (firstNuber, arrayRange, preiod) => {
  const result = [];
  for (let i = 0; i < arrayRange; i += 1) {
    result[0] = firstNuber;
    result.push(result[i] + preiod);
  }
  return result;
};

const getHiddenNumberArr = () => {
  const firstNuber = getRandomNumberRange(0, 20);
  const arrayRange = getRandomNumberRange(5, 10);
  const preiod = getRandomNumberRange(1, 10);
  const arr = getArithmeticProgression(firstNuber, arrayRange, preiod);
  const randomInd = arr[getRandomNumberRange(0, arr.length - 1)];
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const hiddenNumber = (randomInd === arr[i]) ? '..' : arr[i];
    result.push(hiddenNumber);
  }
  const question = result.join(' ');
  const answer = String(randomInd);
  return [question, answer];
};

const launchTheBrainProgression = () => {
  const description = 'What number is missing in the progression?';
  const result = launchTheBrainGame(description, getHiddenNumberArr);
  return result;
};

export default launchTheBrainProgression;
