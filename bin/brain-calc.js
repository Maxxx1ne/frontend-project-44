#!/usr/bin/env node

import runEngine from '../src/index.js';
import { description, default as generateRound } from '../src/games/calc.js';

runEngine(description, generateRound);
