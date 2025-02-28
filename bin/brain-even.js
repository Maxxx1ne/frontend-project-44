#!/usr/bin/env node
// Функция четного числа

import readlineSync from 'readline-sync'


// Функция для генерации случайного числа
const getRandomNumber = () => Math.floor(Math.random() * 100)


// Сама игра
const playEvenGame = () => {
    console.log('Welcome to the Brain Games!')

    const userName = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${userName}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    let correctAnswersCount = 0
    const totalQuestions = 3

    while (correctAnswersCount < totalQuestions) {
        const number = getRandomNumber()
        const correctAnswer = number % 2 === 0 ? 'yes' : 'no'

        console.log(`Question: ${number}`)
        const userAnswer = readlineSync.question('Your answer: ')

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${userName}!`)
            return
        }

        console.log('Correct!')
        correctAnswersCount++
    }

    console.log(`Congratulations, ${userName}!`)
}
playEvenGame()