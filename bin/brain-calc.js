#!/usr/bin/env node

import runEngine from '../src/index.js'
import generateRound, { description } from '../src/games/calc.js'

runEngine(description, generateRound)
