#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getAnswerToQuestion = (questionText) => readlineSync.question(questionText);

const getRandomNumber = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

const generateQuestionsAndAnswers = (quantity) => {
  const result = [];

  for (let i = 0; i < quantity; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const isEven = randomNumber % 2 === 0;

    result.push({
      question: `Question: ${randomNumber}`,
      answer: isEven ? 'yes' : 'no',
    });
  }

  return result;
};

const startGame = (questionsAndAnswers, userName) => {
  const isWinner = questionsAndAnswers.every((questionAndAnswer) => {
    const { question, answer } = questionAndAnswer;

    console.log(question);

    const userAnswer = getAnswerToQuestion('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
      return true;
    }

    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
    console.log(`Let\'s try again, ${userName}!`);
  });

  if (isWinner) {
    console.log(`Congratulations, ${userName}!`);
  }
};

console.log('Welcome to the Brain Games!');

const userName = getAnswerToQuestion('May I have your name? ');
const questionsAndAnswers = generateQuestionsAndAnswers(3);

console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

startGame(questionsAndAnswers, userName);