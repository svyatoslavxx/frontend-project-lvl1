import readlineSync from 'readline-sync';

const startGame = (description, createRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${description}`);
  let roundCount = 0;
  const maximumOfCorrectAnswers = 3;

  while (roundCount < maximumOfCorrectAnswers) {
    const [questionResult, correctAnswer] = createRound();
    console.log(`Question: ${questionResult}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      roundCount += 1;
      console.log('Correct!');
    }

    if (answer !== correctAnswer) {
      return console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default startGame;
