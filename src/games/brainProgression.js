import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const taskDescription = 'What number is missing in the progression?';

const generateQuestionAnswerPair = () => {
  const firstNumberInProgression = getRandomNumber(0, 100);
  const step = getRandomNumber(2, 10);
  const progressionLength = getRandomNumber(5, 9);
  const hiddenElementIndex = getRandomNumber(0, progressionLength);
  const numbersForQuestion = [];
  numbersForQuestion.push(firstNumberInProgression + step);

  for (let i = 1; i < progressionLength + 1; i += 1) {
    numbersForQuestion.push(numbersForQuestion[i - 1] + step);
  }

  const HiddenElement = numbersForQuestion[hiddenElementIndex].toString();
  const question = [...numbersForQuestion];
  question[hiddenElementIndex] = '..';
  const questionWithHiddenElement = question.join(' ');

  return [questionWithHiddenElement, HiddenElement];
};

export default () => startGame(taskDescription, generateQuestionAnswerPair);
