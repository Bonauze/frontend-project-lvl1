import getRandomNumber from '../utils/get-random-number.js';
import runGameEngine from '../index.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }

  return getGreatestCommonDivisor(secondNumber, firstNumber % secondNumber);
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGreatestCommonDivisor(firstNumber, secondNumber).toString();

  return { question, answer };
};

const runGame = () => {
  runGameEngine(DESCRIPTION, getGameData);
};

export default runGame;
