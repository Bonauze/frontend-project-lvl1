#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getAnswerToQuestion = (questionText) => readlineSync.question(questionText);

const getRandomNumber = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

const generateQuestionsAndAnswers = (quantity) => {
  const result = [];
  const signs = ['+', '-', '*'];

  for (let i = 0; i < quantity; i += 1) {
    const firstRandomNumber = getRandomNumber(1, 100);
    const secondRandomNumber = getRandomNumber(1, 100);
    const randomSign = signs[getRandomNumber(0, 2)];
    let answer = null;

    switch (randomSign) {
      case signs[0]:
        answer = firstRandomNumber + secondRandomNumber;
        break;
      case signs[1]:
        answer = firstRandomNumber - secondRandomNumber;
        break;
      case signs[2]:
        answer = firstRandomNumber * secondRandomNumber;
        break;
      default:
        throw new Error(`Unknown random sign: ${randomSign}!`);
    }

    result.push({
      question: `Question: ${firstRandomNumber} ${randomSign} ${secondRandomNumber}`,
      answer,
    });
  }

  return result;
};

const startGame = (questionsAndAnswers, userName) => {
  const isWinner = questionsAndAnswers.every((questionAndAnswer) => {
    const { question, answer } = questionAndAnswer;

    console.log(question);

    const userAnswer = Number(getAnswerToQuestion('Your answer: '));

    if (userAnswer === answer) {
      console.log('Correct!');
      return true;
    }

    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  });

  if (isWinner) {
    console.log(`Congratulations, ${userName}!`);
  }
};

console.log('Welcome to the Brain Games!');

const userName = getAnswerToQuestion('May I have your name? ');
const questionsAndAnswers = generateQuestionsAndAnswers(3);

console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');

startGame(questionsAndAnswers, userName);
