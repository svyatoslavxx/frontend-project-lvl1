import readlineSync from 'readline-sync';

const askUserName = () => {
  const respondentName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${respondentName}!`);
};

export default askUserName;
