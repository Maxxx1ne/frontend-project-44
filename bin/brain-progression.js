#!/usr/bin/env node
// Функция прогрессии

import readlineSync from 'readline-sync'

// Функция для генерации арифметической прогрессии
const generateProgression = () => {
    const length = getRandomNumber(5, 10)  // Длина прогрессии от 5 до 10
    const start = getRandomNumber(1, 50)   // Начальное значение прогрессии
    const step = getRandomNumber(1, 10)    // Размер шага прогрессии

    const progression = []
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step)
    }
    
    const hiddenIndex = getRandomNumber(0, length - 1)    // Случайная позиция для скрытого элемента
    const hiddenValue = progression[hiddenIndex]          // Значение которое будет скрыто
    progression[hiddenIndex] = '..'                       // Замена скрытого значение на '..'

    return { progression: progression.join(' '), hiddenValue }
}

// Функция для генерации рандомного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Основная игра
const playProgressionGame = () => {
    console.log('Welcome to the Brain Games!')
    const userName = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${userName}!`)
    console.log('What number is missing in the progression?')

    const totalQuestions = 3 
    for (let i = 0; i < totalQuestions; i++) {
        const { progression, hiddenValue } = generateProgression()

        console.log(`Question: ${progression}`)
        const userAnswer = readlineSync.question('Your answer: ')

        if (parseInt(userAnswer, 10) !== hiddenValue) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`)
            console.log(`Let's try again, ${userName}!`)
            return
        }

        console.log('Correct!')
    }

    console.log(`Congratulations, ${userName}!`)
}
playProgressionGame()