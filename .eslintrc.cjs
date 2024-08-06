/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    indent: 0,
    'space-before-function-paren': 0
  },
  env: {
    node: true, // 使 ESLint 识别 Node.js 环境
    browser: true,
    commonjs: true,
    es6: true
  },
  
  globals: {
    process: true // 使 ESLint 识别 process 变量
  }
}
