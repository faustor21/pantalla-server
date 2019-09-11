module.exports = {
  extends: ['standard', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true
  },  
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },  
  rules: {}
}
