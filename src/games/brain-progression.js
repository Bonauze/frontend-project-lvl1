import getRandomNumber from '../utils/get-random-number.js';
import GameEngine from '../game-engine.js';

const TASK_DESCRIPTION = 'What number is missing in the progression?';
const AMOUNT_OF_NUMBERS = 10;

const getRandomProgression = (amountOfNumbers) => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 20);
  const result = [];

  for (let i = 0; i < amountOfNumbers; i += 1) {
    const lastNumber = result[result.length - 1];

    result.push(lastNumber ? lastNumber + step : firstNumber);
  }

  return result;
};

const getGameData = () => {
  const progression = getRandomProgression(AMOUNT_OF_NUMBERS);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const question = progression.map((number, index) => (index === randomIndex ? '..' : number)).join(' ');
  const answer = progression[randomIndex].toString();

  return { question, answer };
};

const runBrainGcdGame = () => {
  const gameEngine = new GameEngine(TASK_DESCRIPTION, getGameData);
  gameEngine.start();
};

export default runBrainGcdGame;
