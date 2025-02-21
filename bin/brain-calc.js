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
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operator')
  }
}

const gameCalc = () => {
  helloUser()
  const userName = myName()
  console.log('What is the result of the expression?')

  let correctAnswers = 0
  const rounds = 3

  for (let i = 0; i < rounds; i++) {
    const num1 = randonNum(1, 20)
    const num2 = randonNum(1, 20)
    const operator = randomOp()
    const question = (`${num1} ${operator} ${num2}`)

    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = calculate(num1, num2, operator)

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!')
      correctAnswers += 1
    } else {
      console.log(`'${userAnswer}' is wrong answer; (Correct answer was ${correctAnswer}).`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

gameCalc()
