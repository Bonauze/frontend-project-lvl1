import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const WELCOME_MESSAGE = 'Welcome to the Brain Games!';
const ASK_NAME_MESSAGE = 'May I have your name? ';
const ANSWER_MESSAGE = 'Your answer: ';
const CORRECT_ANSWER_MESSAGE = 'Correct!';

const getVictoryMessage = (userName) => `Congratulations, ${userName}!`;
const getLosingMessage = (userName) => `Let's try again, ${userName}!`;
const getQuestionMessage = (question) => `Question: ${question}`;
const getErrorMessage = (userAnswer, answer) => `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`;

function GameEngine(taskDescription, getGameData) {
  let userName = null;
  let isWinner = true;

  const getAnswerToQuestion = (questionText) => readlineSync.question(questionText);

  const showMessage = (messageText) => console.log(messageText);

  const welcome = () => {
    showMessage(WELCOME_MESSAGE);
    userName = getAnswerToQuestion(ASK_NAME_MESSAGE);
    showMessage(taskDescription);
  };

  const finish = () => {
    const { userName, isWinner } = this;
    const finishMessage = isWinner ? getVictoryMessage(userName) : getLosingMessage(userName);
    showMessage(finishMessage);
  };

  return {
    start: () => {
      welcome();

      for (let i = 0; i < ROUNDS_COUNT; i += 1) {
        const { question, answer } = getGameData();

        showMessage(getQuestionMessage(question));

        const userAnswer = getAnswerToQuestion(ANSWER_MESSAGE);

        if (userAnswer === answer) {
          showMessage(CORRECT_ANSWER_MESSAGE);
        } else {
          isWinner = false;
          showMessage(getErrorMessage(userAnswer, answer));
          break;
        }
      }

      finish();
    },
  };
}

export default GameEngine;
