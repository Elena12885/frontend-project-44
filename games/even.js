import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const determiningTheParity = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const userResponse = () => {
  for (let i = 0; i < 3; i += 1) {
    const random = getRandomInt(100);
    const determining = determiningTheParity(random);
    console.log(`Question: ${random}`);
    const response = readlineSync.question('Your answer: ');
    if (response !== determining) {
      console.log(`${response} is wrong answer ;(. Correct answer was ${determining}.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  if (userResponse() !== true) {
    return (`Let's try again, ${name}!`);
  }
  return (`Congratulations, ${name}!`);
};

export default brainEven;
