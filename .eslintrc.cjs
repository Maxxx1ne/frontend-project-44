module.exports = {
  env: {
    browser: true,
    es2021: true, // <- Добавлена запятая
  },
  extends: [
    'airbnb-base', // <- Добавлена запятая
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module', // <- Добавлена запятая
  },// <- Здесь не должно быть лишних пробелов перед комментарием
  rules: {}, // <- Добавлена запятая
};
