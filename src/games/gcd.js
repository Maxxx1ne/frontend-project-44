import getRandomNumber from '../utils.js'

const findGCD = (a, b) => {
  if (b === 0) return a
  return findGCD(b, a % b)
}

const generateRound = () => {
  const a = getRandomNumber(1, 50)
  const b = getRandomNumber(1, 50)
  const question = `${a} ${b}`
  const answer = String(findGCD(a, b))
  return [question, answer]
}

export const description = 'Find the greatest common divisor of given numbers.'

export default generateRound
