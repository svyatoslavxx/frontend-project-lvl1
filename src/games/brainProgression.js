import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const taskDescription = 'What number is missing in the progression?';

const generateProgression = (firstNumber, step, progressionLength) => {
  const numbersForQuestion = [];
  numbersForQuestion.push(firstNumber + step);

  for (let i = 1; i < progressionLength + 1; i += 1) {
    numbersForQuestion.push(numbersForQuestion[i - 1] + step);
  }

  return numbersForQuestion;
};

const generateQuestionAnswerPair = () => {
  const firstNumberInProgression = getRandomNumber(0, 100);
  const step = getRandomNumber(2, 10);
  const progressionLength = getRandomNumber(5, 9);
  const hiddenElementIndex = getRandomNumber(0, progressionLength);
  const progression = generateProgression(firstNumberInProgression, step, progressionLength);
  const correctAnswer = progression[hiddenElementIndex].toString();
  const question = [...progression];
  question[hiddenElementIndex] = '..';
  const questionWithHiddenElement = question.join(' ');

  return [questionWithHiddenElement, correctAnswer];
};

export default () => startGame(taskDescription, generateQuestionAnswerPair);
