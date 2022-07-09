import readlineSync from 'readline-sync';

const checkInputAndGiveBaseLogic = (description, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${description}`);
  let correctAnswerCount = 0;
  const maximumOfCorrectAnswers = 3;
  while (correctAnswerCount < maximumOfCorrectAnswers) {
    const questionResult = gameLogic();
    const correctAnswer = questionResult[1];
    console.log(`Question: ${questionResult[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      correctAnswerCount += 1;
      console.log('Correct!');
    }
    if (answer !== correctAnswer) {
      return console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default checkInputAndGiveBaseLogic;
