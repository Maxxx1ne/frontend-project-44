#!/usr/bin/env node
// Функция НОД

import readlineSync from 'readline-sync'

// Функция для генерации рандомного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Функция для вычисления НОДа
const gcd = (a, b) => {
    while (b !== 0) {
        [a, b] = [b, a % b]
    }
    return a
}

// Основная игра
const playGcdGame = () => {
    console.log('Welcome to the Brain Games!')
    const userName = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${userName}!`)
    console.log('Find the greatest common divisor of given numbers.')

    const totalQuestions = 3
    for (let i = 0; i < totalQuestions; i++) {
        const num1 = getRandomNumber(1, 100)
        const num2 = getRandomNumber(1, 100)
        const correctAnswer = gcd(num1, num2)

        console.log(`Question: ${num1} ${num2}`)
        const userAnswer = readlineSync.question('Your answer: ')

        if (parseInt(userAnswer, 10) !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${userName}!`)
            return
        }

        console.log('Correct!')
    }

    console.log(`Congratulations, ${userName}!`)
}
playGcdGame()