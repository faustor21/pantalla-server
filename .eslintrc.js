module.exports = {
  extends: [ 'plugin:import/errors', 'plugin:import/warnings', 'standard', 'prettier' ],
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
  rules: {  }
}
