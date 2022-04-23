module.exports = {
  extends: ['airbnb', 'plugin:react-hooks/recommended', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/accessible-emoji': 0,
    'react/jsx-key': 1,
    'react-hooks/rules-of-hooks': 2,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'react/no-array-index-key': 1,
    'react/forbid-prop-types': 0,
    'no-unused-vars': [1, { ignoreRestSiblings: true }],
    radix: 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
  },
};
