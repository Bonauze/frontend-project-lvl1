import getRandomNumber from '../utils/get-random-number.js';
import GameEngine from '../game-engine.js';

const TASK_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getAnswer = (firstNumber, secondNumber) => {
  const numbers = [firstNumber, secondNumber].sort().reverse();

  while (numbers[numbers.length - 1] !== 0) {
    const numbersLength = numbers.length;
    const lastNumber = numbers[numbersLength - 1];
    const penultimateNumber = numbers[numbersLength - 2];
    numbers.push(penultimateNumber % lastNumber);
  }

  return numbers[numbers.length - 2];
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const answer = getAnswer(firstNumber, secondNumber).toString();

  return {
    question: `${firstNumber} ${secondNumber}`,
    answer,
  };
};

const runBrainGcdGame = () => {
  const gameEngine = new GameEngine(TASK_DESCRIPTION, getGameData);
  gameEngine.start();
};

export default runBrainGcdGame;
