import getRandomNumber from '../utils/get-random-number.js';
import runGameEngine from '../run-game-engine.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const number = getRandomNumber(1, 100);
  const isEven = number % 2 === 0;

  const question = number;
  const answer = isEven ? 'yes' : 'no';

  return { question, answer };
};

const runGame = () => {
  runGameEngine(DESCRIPTION, getGameData);
};

export default runGame;
