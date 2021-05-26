module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11, // es2020
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'no-console': 0,
    'react/forbid-prop-types': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-unused-vars': 'warn',
    'no-param-reassign': 0,
  },
  plugins: ['react'],
};
