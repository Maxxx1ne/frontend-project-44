// Код приветствия для ввода имени

import readlineSync from 'readline-sync'

const greetUser = () => {
    console.log('Welcome to the Brain Games!')
    const userName = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${userName}!`)
}

export default greetUser