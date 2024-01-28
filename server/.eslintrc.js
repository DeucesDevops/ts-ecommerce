module.exports = {
    env: {
        node: true,
        es2016: true,
    },
    extends: ["eslint:recommended", 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ['@typescript-eslint'],
  }