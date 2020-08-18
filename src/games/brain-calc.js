import getRandomNumber from '../utils/get-random-number.js';
import GameEngine from '../game-engine.js';

const TASK_DESCRIPTION = 'What is the result of the expression?';

const OPERATORS = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLICATION: '*',
};

const getAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case OPERATORS.PLUS:
      return firstNumber + secondNumber;
    case OPERATORS.MINUS:
      return firstNumber - secondNumber;
    case OPERATORS.MULTIPLICATION:
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operator: ${operator}!`);
  }
};

const getRandomOperator = (operators) => {
  const keys = Object.keys(operators);
  const randomKey = keys[getRandomNumber(0, keys.length - 1)];
  return operators[randomKey];
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const operator = getRandomOperator(OPERATORS);
  const answer = getAnswer(firstNumber, secondNumber, operator).toString();

  return {
    question: `${firstNumber} ${operator} ${secondNumber}`,
    answer,
  };
};

const runBrainCalcGame = () => {
  const gameEngine = new GameEngine(TASK_DESCRIPTION, getGameData);
  gameEngine.start();
};

export default runBrainCalcGame;