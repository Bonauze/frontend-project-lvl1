import getRandomNumber from '../utils/get-random-number.js';
import isPrimeNumber from '../utils/is-prime-number.js';
import runGameEngine from '../run-game-engine.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const number = getRandomNumber(1, 100);
  const isPrime = isPrimeNumber(number);

  const question = number;
  const answer = isPrime ? 'yes' : 'no';

  return { question, answer };
};

const runGame = () => {
  runGameEngine(DESCRIPTION, getGameData);
};

export default runGame;
