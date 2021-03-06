module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    // 'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    // "eqeqeq": "off",
    // "no-return-assign": "off",
  },
};
