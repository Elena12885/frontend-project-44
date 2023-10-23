import readlineSync from 'readline-sync';

const getRandNumRange = (min = 2, max = 100) => (Math.floor(Math.random() * (max - min + 1)) + min);

const launchTheBrainGame = (description, rightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
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

export { launchTheBrainGame, getRandNumRange };
