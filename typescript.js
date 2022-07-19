module.exports = {
    env: {
        node: true,
        es2021: true,
        browser: true,
        jest: true,
    },
    extends: [
        require.resolve('./configs/eslint.js'),
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
};
