import readlineSync from 'readline-sync';

const brainEven = () => {
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello ${name} !`);
  readlineSync.question('Answer "yes" if the number is even, otherwise answer "no". ');
  const randomNumber = Math.round(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  const yourAnswer = readlineSync.question('Your answer: ');
  if ((randomNumber % 2 === 0) && (yourAnswer === 'no')) {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
  } else if ((randomNumber % 2 !== 0) && (yourAnswer === 'yes')) {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
  } else if ((randomNumber % 2 === 0) && (yourAnswer === yes)) {
    console.log('Correct!');
  }
};

export default brainEven;
