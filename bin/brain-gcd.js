// Какой-то гсд

import readlineSync from 'readline-sync';


const gcd = (a, b) => {
  while (b) {
    [a, b] = [b, a % b]
  }
  return a
}

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const gcdGame = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('Find the greatest common divisor of given numbers.')

  const rounds = 3

  for (let i = 0; i < rounds; i++) {
    const num1 = randomNum(1, 100)
    const num2 = randomNum(1, 100)
    const correctAnswer = gcd(num1, num2)

    console.log(`Question: ${num1} ${num2}`)
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10)

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(`'${userAnswer}' is wrong answer; (Correct answer was ${correctAnswer}).`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

gcdGame()
