import getRandomNumber from '../utils/get-random-number.js';
import runGameEngine from '../index.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const number = getRandomNumber(1, 100);
  const isPrime = isPrimeNumber(number);

  const answer = isPrime ? 'yes' : 'no';

  return { question: number, answer };
};

const runGame = () => {
  runGameEngine(DESCRIPTION, getGameData);
};

export default runGame;
