import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const startBrainProgressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  const progressionLength = getRandomNumber(5, 9);
  const createProgression = () => {
    const firstNumberInProgression = getRandomNumber(0, 100);
    const step = getRandomNumber(2, 10);
    const hiddenElemIndex = getRandomNumber(0, progressionLength);
    const numbersForQuestion = [];
    numbersForQuestion.push(firstNumberInProgression + step);
    for (let i = 1; i < progressionLength + 1; i += 1) {
      numbersForQuestion.push(numbersForQuestion[i - 1] + step);
    }
    const correctHiddenElem = numbersForQuestion[hiddenElemIndex].toString();
    const question = [...numbersForQuestion];
    question[hiddenElemIndex] = '..';
    const questionWithHiddenElem = question.join(' ');
    return [questionWithHiddenElem, correctHiddenElem];
  };
  startGame(gameDescription, createProgression);
};

export default startBrainProgressionGame;
