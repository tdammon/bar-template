module.exports = {
  root: true,
  env: {
      browser: true,
      node: true
  },
  parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 2018,
      sourceType: 'module'
  },
  extends: [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "prettier",
      "prettier/react"
  ],
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
          modules: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
  },
  plugins: ["react", "react-hooks", "jest", "prettier"],
  // add your custom rules here
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [1, {
          extensions: ['.js', '.jsx']
      }],
      'react/forbid-prop-types': [0, {
          forbid: ['any']
      }],
      'react/prop-types': 0,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
  },
  env: {
      jest: true,
      browser: true,
      node: true,
  },
}
