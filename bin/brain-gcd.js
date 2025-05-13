#!/usr/bin/env node

import runEngine from '../src/index.js'
import generateRound, { description } from '../src/games/gcd.js'

runEngine(description, generateRound)
