import readlineSync from 'readline-sync';

const userName = () => {
  const respondentName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${respondentName}!`);
};

export default userName;
