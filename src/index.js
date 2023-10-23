import readlineSync from 'readline-sync';

const getRandomNumberRange = (min = 2, max = 100) => (Math.floor(Math.random() * (max - min + 1)) + min);

const launchTheBrainGame = (text, rightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${text}`);
  const numberRounds = 3;
  for (let i = 0; i < numberRounds; i += 1) {
    const rightAn = String(rightAnswer());
    const response = readlineSync.question('Your answer: ');
    if (response !== rightAn) {
      console.log(`${response} is wrong answer ;(. Correct answer was ${rightAn}.`);
      return console.log(`Let's try again, ${name}!`);
    }
  console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};


export { launchTheBrainGame, getRandomNumberRange };
