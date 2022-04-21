module.exports = {
  extends: ["airbnb", "plugin:react-hooks/recommended", "prettier"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "no-console": 0,
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/accessible-emoji": 0,
    "react/jsx-key": 1,
    "react-hooks/rules-of-hooks": 2,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".mdx"]
      }
    ]
  }
}
