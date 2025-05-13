import getRandomNumber from '../utils.js'

const operators = ['+', '-', '*']

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const a = getRandomNumber(1, 20)
  const b = getRandomNumber(1, 20)
  const operator = operators[getRandomNumber(0, operators.length - 1)]
  const question = `${a} ${operator} ${b}`
  const answer = String(calculate(a, b, operator))
  return [question, answer]
}

export const description = 'What is the result of the expression?'

export default generateRound
