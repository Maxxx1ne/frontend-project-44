module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    'linebreak-style': ['error', 'windows']
  }  // <- Здесь не должно быть точки с запятой
}
