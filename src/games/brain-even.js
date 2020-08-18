import getRandomNumber from '../utils/get-random-number.js';
import GameEngine from '../game-engine.js';

const TASK_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const number = getRandomNumber(1, 100);
  const isEven = number % 2 === 0;

  return {
    question: number,
    answer: isEven ? 'yes' : 'no',
  };
};

const runGame = () => {
  const gameEngine = new GameEngine(TASK_DESCRIPTION, getGameData);
  gameEngine.start();
};

export default runGame;
