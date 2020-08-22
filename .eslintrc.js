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
        'indent': [ 'error', 4 ],
        'no-trailing-spaces': 'error',
        'react/display-name': 'off',
        'react/prop-types': 'off',
    },
}
