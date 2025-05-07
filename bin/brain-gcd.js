#!/usr/bin/env node

import runEngine from '../src/index.js';
import { description, default as generateRound } from '../src/games/gcd.js';

runEngine(description, generateRound);
