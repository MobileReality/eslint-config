module.exports = {
    extends: [
        require.resolve('./react-javascript.js'),
        './configs/typescript',
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.tsx'],
            },
        ],
    },
};
