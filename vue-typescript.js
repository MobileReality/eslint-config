module.exports = {
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        'plugin:prettier-vue/recommended',
        '@vue/prettier',
        '@vue/typescript',
        require.resolve('./rules/vue/vue-prettier-rules.js'),
        require.resolve('./rules/vue/vue-rules.js'),
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
};
