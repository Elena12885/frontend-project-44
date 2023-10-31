import readlineSync from 'readline-sync';

const launchTheBrainGame = (description, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const questionsAndAnswers = questionAndAnswer();
    const question = String(questionsAndAnswers[0]);
    const rightAnswer = String(questionsAndAnswers[1]);
    console.log(`Question: ${question}`);
    const response = readlineSync.question('Your answer: ');
    if (response !== rightAnswer) {
      console.log(`${response} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default launchTheBrainGame;
