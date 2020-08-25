import getRandomNumber from '../utils/get-random-number.js';
import runGameEngine from '../run-game-engine.js';

const DESCRIPTION = 'What is the result of the expression?';

const SIGNS = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLICATION: '*',
};

const calcExpression = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case SIGNS.PLUS:
      return firstNumber + secondNumber;
    case SIGNS.MINUS:
      return firstNumber - secondNumber;
    case SIGNS.MULTIPLICATION:
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown sign: ${sign}!`);
  }
};

const getRandomSign = (signs) => {
  const keys = Object.keys(signs);
  const randomKey = keys[getRandomNumber(0, keys.length - 1)];
  return signs[randomKey];
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const sign = getRandomSign(SIGNS);

  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = calcExpression(firstNumber, secondNumber, sign).toString();

  return { question, answer };
};

const runGame = () => {
  runGameEngine(DESCRIPTION, getGameData);
};

export default runGame;
