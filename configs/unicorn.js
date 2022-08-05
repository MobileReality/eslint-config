module.exports = {
    extends: ['plugin:unicorn/recommended', 'prettier'],
    rules: {
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-method-this-argument': 'off',

        'unicorn/catch-error-name': [
            'error',
            {
                name: 'err',
            },
        ],
        'unicorn/consistent-function-scoping': [
            'error',
            { checkArrowFunctions: false },
        ],
    },
};
