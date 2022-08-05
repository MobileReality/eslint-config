module.exports = {
    extends: ['./configs/eslint', './configs/unicorn'],
    rules: {
        'no-console': 'off',

        'unicorn/no-process-exit': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-top-level-await': 'off',
    },
};
