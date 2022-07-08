import baseLogic from './index.js';
import getRandomNum from './getRandomNum.js';

const ariphmeticProgression = () => {
  const taskDescription = 'What number is missing in the progression?';
  const progression = () => {
    const progressionLength = getRandomNum(5, 10);
    const firstNumberInProgression = getRandomNum(0, 100);
    const step = getRandomNum(2, 10);
    const hiddenElemIndex = getRandomNum(0, progressionLength);
    const numbersForQuestion = [];
    for (let i = 0; i < progressionLength + 1; i += 1) {
      numbersForQuestion.push(firstNumberInProgression + step);
    }
    const correctHiddenElem = numbersForQuestion[hiddenElemIndex];
    const question = [...numbersForQuestion];
    question[hiddenElemIndex] = '..';
    const questionWithHiddenElem = question.join(' ');
    return [questionWithHiddenElem, correctHiddenElem];
  };
  baseLogic(taskDescription, progression);
};

export default ariphmeticProgression;
