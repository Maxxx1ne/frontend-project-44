import getRandomNumber from '../utils.js'

const isEven = num => num % 2 === 0

const generateRound = () => {
  const question = getRandomNumber(1, 100)
  const answer = isEven(question) ? 'yes' : 'no'
  return [question, answer]
}

export const description = 'Answer "yes" if the number is even, otherwise answer "no".'

export default generateRound
