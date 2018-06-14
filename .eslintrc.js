module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: ["airbnb", "plugin:prettier/recommended"],
    parser: "babel-eslint",
    rules: {
      "import/no-extraneous-dependencies": ["error", { packageDir: "." }],
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "prettier/prettier": ["error", { singleQuote: true }]
    }
  };