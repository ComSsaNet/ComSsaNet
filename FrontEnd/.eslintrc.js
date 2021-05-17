module.exports = {
    env: {
        browser: true,
        node: true,
        es2020: true,
    },
    extends: ['eslint:recommended', 'airbnt-base'],
    parserOptions: {
        ecmaVersion: 11, //es2020
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
    },
    plugins: ['react'],
};
