
import readlineSync from 'readline-sync'

const progration = (start, step, length) => {
  return Array.from({ length }, (_, index) => start + index * step)
}

const hideElem = (progression) => {
  const hiddenIndex = Math.floor(Math.random() * progression.length)
  const hiddenValue = progression[hiddenIndex]
  progression[hiddenIndex] = '..'
  return { progression, hiddenValue }
}


const progressionGame = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('What number is missing in the progression?')

  const rounds = 3

  for (let i = 0; i < rounds; i++) {
    const start = Math.floor(Math.random() * 10)
    const step = Math.floor(Math.random() * 10) + 1
    const length = 10

    let progression = progration(start, step, length)
    const { progression: displayedProgression, hiddenValue } = hideElem(progression)

    console.log(`Question: ${displayedProgression.join(' ')}`)
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10)

    if (userAnswer === hiddenValue) {
      console.log('Correct!')
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

progressionGame()
