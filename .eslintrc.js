module.exports = {
  extends: [
    'pixie',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'indent': [ 'error', 2 ],
    'no-trailing-spaces': 'error',
    'react/prop-types': 'off',
  },
}
