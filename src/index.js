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

function runGameEngine(description, getGameData) {
  const getAnswerToQuestion = (questionText) => readlineSync.question(questionText);

  const showMessage = (messageText) => console.log(messageText);

  showMessage(WELCOME_MESSAGE);
  const userName = getAnswerToQuestion(ASK_NAME_MESSAGE);
  showMessage(description);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, answer } = getGameData();

    showMessage(getQuestionMessage(question));

    const userAnswer = getAnswerToQuestion(ANSWER_MESSAGE);

    if (userAnswer === answer) {
      showMessage(CORRECT_ANSWER_MESSAGE);
    } else {
      showMessage(getErrorMessage(userAnswer, answer));
      showMessage(getLosingMessage(userName));
      return;
    }
  }

  showMessage(getVictoryMessage(userName));
}

export default runGameEngine;
