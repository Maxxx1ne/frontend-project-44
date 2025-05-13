import getRandomNumber from '../utils.js'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const question = getRandomNumber(1, 50)
  const answer = isPrime(question) ? 'yes' : 'no'
  return [question, answer]
}

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export default generateRound
