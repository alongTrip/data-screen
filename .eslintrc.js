module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 新增
    "space-before-function-paren": 0,
    "indent": ["off", 2],
    "no-sparse-arrays": 0,
    "no-unused-vars": 0,
    "no-undef": 0,
    "camelcase": 0,
    "quotes": 0,
    "no-redeclare": 0,
    "space-before-function-paren": 0, // 函数后面强制空格
    "semi": 0 // 不允许文尾出现分号
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
