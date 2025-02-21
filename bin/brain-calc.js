// Функция калькулятор

import { helloUser, myName } from '../src/cli.js'
import readlineSync from 'readline-sync'


const randonNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const randomOp = () => {
  const operators = ['+', '-', '*']
  return operators[randonNum(0, operators.length - 1)]
}

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error('Unknown operator')
  }
}

const gameCalc = () => {
  helloUser()
  const userName = myName()
  console.log('What is the result of the expression?')

  const rounds = 3 // Количество вопросов
  let correctAnswers = 0

  for (let currentRound = 0; currentRound < rounds; currentRound++) {
    const num1 = randonNum(1, 20)
    const num2 = randonNum(1, 20)
    const operator = randomOp()
    const question = (`${num1} ${operator} ${num2}`)
    const correctAnswer = calculate(num1, num2, operator)
    
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!')
      correctAnswers += 1
    } else {
      console.log(`'${userAnswer}' is wrong answer; (Correct answer was ${correctAnswer}).`)
    }
  }

  console.log(`Congratulations, ${userName}!`)
  console.log(`You answered correctly ${correctAnswers} out of ${rounds} questions.`)
}

gameCalc()
