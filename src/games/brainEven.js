import readlineSync from 'readline-sync';

const starBrainEvenGame = () => {
  let countAnswers = 0;
  console.log('Welcome to the Brain Games!');
  const respondentName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${respondentName}!`);
  console.log('Answer "yes" if the number is even, otherwise "no".');
  while (countAnswers < 3) {
    const randomNum = Math.round(Math.random() * 100);
    console.log((`Question: ${randomNum}`));
    const answer = readlineSync.question('Your answer: ');
    if ((randomNum % 2 === 0) && (answer === 'no')) {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${respondentName}!`);
    }
    if ((randomNum % 2 !== 0) && (answer === 'yes')) {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${respondentName}!`);
    }
    if ((randomNum % 2 === 0) && (answer === 'yes')) {
      countAnswers += 1;
      console.log('Correct!');
    }
    if ((randomNum % 2 !== 0) && (answer === 'no')) {
      countAnswers += 1;
      console.log('Correct!');
    }
  }
  return console.log(`Congratulations, ${respondentName}!`);
};

export default starBrainEvenGame;
