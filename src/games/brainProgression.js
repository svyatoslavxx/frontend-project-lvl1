import baseLogic from '../index.js';
import getRandomNum from '../getRandomNum.js';

const ariphmeticProgression = () => {
  const taskDescription = 'What number is missing in the progression?';
  const progressionLength = getRandomNum(5, 9);
  const progression = () => {
    const firstNumberInProgression = getRandomNum(0, 100);
    const step = getRandomNum(2, 10);
    const hiddenElemIndex = getRandomNum(0, progressionLength);
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
  baseLogic(taskDescription, progression);
};

export default ariphmeticProgression;
