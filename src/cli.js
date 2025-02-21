// Код приветствия для ввода имени

import readlineSync from 'readline-sync'

export const helloUser = () => {
  console.log('Welcome to the Brain Games!')
}

export const myName = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}