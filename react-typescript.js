module.exports = {
    extends: [
        require.resolve('./react-javascript.js'),
        'plugin:@typescript-eslint/recommended',
        require.resolve('./rules/typescript-rules.js'),
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
    },
};
