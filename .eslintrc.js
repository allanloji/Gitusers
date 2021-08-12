module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript'],
  rules: {
    'arrow-parens': [1, 'as-needed'],
    'react/jsx-fragments': [1, 'element'],
    'react/jsx-props-no-spreading': [
      0,
      {
        html: 'ignore',
        custom: 'ignore',
        exceptions: [],
      },
    ],
    'implicit-arrow-linebreak': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-quotes': ['error', 'prefer-single'],
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
