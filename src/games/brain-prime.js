import getRandomNumber from '../utils/get-random-number.js';
import isPrimeNumber from '../utils/is-prime-number.js';
import GameEngine from '../game-engine.js';

const TASK_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const number = getRandomNumber(1, 100);
  const isPrime = isPrimeNumber(number);

  const question = number;
  const answer = isPrime ? 'yes' : 'no';

  return { question, answer };
};

const runGame = () => {
  const gameEngine = GameEngine(TASK_DESCRIPTION, getGameData);
  gameEngine.start();
};

export default runGame;
