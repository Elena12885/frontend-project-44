import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const brainGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  if (userResponse() !== true) {
    return (`Let's try again, ${name}!`);
  }
  return (`Congratulations, ${name}!`);
};

export { brainGame, getRandomInt };
