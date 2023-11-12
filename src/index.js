import readlineSync from 'readline-sync';

const launchTheBrainGame = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rightAnswer] = getQuestionAndAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);

      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${name}!`);
};

export default launchTheBrainGame;
