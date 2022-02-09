module.exports = {
    extends: [
        require.resolve('./react-javascript.js'),
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.tsx'],
            },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/array-type': [
            'error',
            {
                array: true,
            },
        ],
        '@typescript-eslint/consistent-indexed-object-style': [
            'error',
            'record',
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-ignore': 'allow-with-description',
            },
        ],
    },
};
