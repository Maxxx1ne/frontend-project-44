#!/usr/bin/env node
// Функция калькулятор

import readlineSync from 'readline-sync'


const getUserName = () => {
    return readlineSync.question('May I have your name? ')
}

// Функция генерации рандомного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Функция генерации рандомного вопроса
const generateExpression = () => {
    const num1 = getRandomNumber(1, 50)
    const num2 = getRandomNumber(1, 50)
    const operators = ['+', '-', '*']
    const operator = operators[getRandomNumber(0, operators.length - 1)]
    return { expression: `${num1} ${operator} ${num2}`, correctAnswer: eval(`${num1} ${operator} ${num2}`) }
}

// Функция для проверки ответа
const checkAnswer = (userAnswer, correctAnswer) => {
    return parseInt(userAnswer, 10) === correctAnswer
}

// Основная игра
const playCalcGame = () => {
    console.log('Welcome to the Brain Games!')
    const userName = getUserName()
    console.log(`Hello, ${userName}!`)
    console.log('What is the result of the expression?')

    const totalQuestions = 3
    for (let i = 0; i < totalQuestions; i++) {
        const { expression, correctAnswer } = generateExpression()
        
        console.log(`Question: ${expression}`)
        const userAnswer = readlineSync.question('Your answer: ')

        if (!checkAnswer(userAnswer, correctAnswer)) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${userName}!`)
            return
        }

        console.log('Correct!')
    }

    console.log(`Congratulations, ${userName}!`)
}
playCalcGame()