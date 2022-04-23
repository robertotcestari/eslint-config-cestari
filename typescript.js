module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended', 
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript',
    './.eslintrc.js',
  ],

  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  rules: {
    // '@typescript-eslint/no-explicit-any': 'off',
    // 'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'warn',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};