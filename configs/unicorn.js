module.exports = {
    extends: ['plugin:unicorn/recommended', 'prettier'],
    rules: {
        'unicorn/catch-error-name': [
            'warn',
            {
                name: 'err',
            },
        ],
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-method-this-argument': 'off',
    },
};
