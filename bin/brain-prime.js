#!/usr/bin/env node
// Функция простого числа

import readlineSync from 'readline-sync'

// Функция проверки на простое число
const isPrime = (num) => {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
}

// Основная игра
const playPrimeGame = () => {
    console.log('Welcome to the Brain Games!')
    const userName = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${userName}!`)
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

    const totalQuestions = 3
    for (let i = 0; i < totalQuestions; i++) {
        const randomNum = Math.floor(Math.random() * 100)
        const correctAnswer = isPrime(randomNum) ? 'yes' : 'no'

        console.log(`Question: ${randomNum}`)
        const userAnswer = readlineSync.question('Your answer: ')

        if (userAnswer.toLowerCase() !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${userName}!`)
            return
        }

        console.log('Correct!')
    }

    console.log(`Congratulations, ${userName}!`)
}
playPrimeGame()