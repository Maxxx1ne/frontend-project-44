### Hexlet tests and linter status:
[![Actions Status](https://github.com/Maxxx1ne/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Maxxx1ne/frontend-project-44/actions)
# Brain Games

**Brain Games** — набор из пяти консольных игр, построенных на арифметической логике. Каждая игра задаёт три вопроса, и для победы нужно правильно ответить на все. 


## 🎮 Доступные игры

1. **Проверка на чётность** (`brain-even`)  
   Угадайте, является ли число чётным.
2. **Калькулятор** (`brain-calc`)  
   Вычислите результат арифметического выражения.
3. **НОД** (`brain-gcd`)  
   Найдите наибольший общий делитель двух чисел.
4. **Арифметическая прогрессия** (`brain-progression`)  
   Определите пропущенное число в последовательности.
5. **Простое ли число?** (`brain-prime`)  
   Определите, является ли число простым.

---

## ⚙️ Установка

1. Убедитесь, что у вас установлен **Node.js** (версия 18 или выше):  
   ```bash
   node -v
   ```
2. Склонируйте репозиторий и перейдите в папку проекта:
   ```bash
   git clone https://github.com/your-username/frontend-project-44.git
   cd frontend-project-44
   ```
3. Установите зависимости:
   ```bash
   make install
   ```
4. Запустите игру (например, `brain-even`):
   ```bash
   make brain-even
   ```
---

## 🚀 Примеры запуска

### 1. Игра "Проверка на чётность"
```bash
$ make brain-even

Welcome to the Brain Games!
May I have your name? Alice
Hello, Alice!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 42
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Alice!
```
https://imgur.com/a/x8qWgQK


### 2. Игра "Калькулятор"
```bash
$ make brain-calc

What is the result of the expression?
Question: 5 + 7
Your answer: 12
Correct!
Question: 10 - 4
Your answer: 6
Correct!
Question: 3 * 8
Your answer: 24
Correct!
Congratulations, Bob!
```

### 3. Игра "НОД"
```bash
$ make brain-gcd

Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 14 21
Your answer: 7
Correct!
Question: 100 60
Your answer: 20
Correct!
Congratulations, Charlie!
```

### 4. Игра "Прогрессия"
```bash
$ make brain-progression

What number is missing in the progression?
Question: 5 7 9 .. 13 15
Your answer: 11
Correct!
Question: 2 5 8 11 .. 17
Your answer: 14
Correct!
Question: 10 .. 14 16 18 20
Your answer: 12
Correct!
Congratulations, David!
```

### 5. Игра "Простое ли число?"
```bash
$ make brain-prime

Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
Question: 10
Your answer: no
Correct!
Question: 13
Your answer: yes
Correct!
Congratulations, Eve!
```

---

## 🛠 Технологии

- **Node.js** (v18+)
- **ESLint** (проверка стиля кода)
- **Readline-Sync** (ввод/вывод в консоль)

---


