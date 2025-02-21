import readlineSync from 'readline-sync'


const primenum = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

const primeGame = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  const rounds = 3 // Количество вопросов
  let correctAnswers = 0

  for (let i = 0; i < rounds; i++) {
    const number = Math.floor(Math.random() * 100)
    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()

    const correctAnswer = primenum(number) ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      correctAnswers += 1
    } else {
      console.log(`'${userAnswer}' is wrong answer; (Correct answer was '${correctAnswer}').`)
    }
  }

  console.log(`Congratulations, ${userName}!`);
  console.log(`You answered correctly ${correctAnswers} out of ${rounds} questions.`)
}

primeGame()
