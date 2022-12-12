module.exports = {
  extends: [
    "plugin:import/typescript",
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    './.eslintrc.js',
    'airbnb-typescript',
  ],

  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [1, { ignoreRestSiblings: true }],
    'no-redeclare': 'off', // serve para function overloading no TS uso aqui: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redeclare.md
    '@typescript-eslint/no-redeclare': [1, { ignoreDeclarationMerge: true }],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
