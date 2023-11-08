import readlineSync from 'readline-sync';

const launchTheBrainGame = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const questionsAndAnswers = getQuestionAndAnswer();
    const question = questionsAndAnswers[0];
    const rightAnswer = questionsAndAnswers[1];
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
