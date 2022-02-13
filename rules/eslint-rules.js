module.exports = {
    rules: {
        'array-callback-return': 'error',
        'dot-notation': 'error',
        eqeqeq: 'error',
        'no-await-in-loop': 'warn',
        'no-console': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-lonely-if': 'error',
        'no-negated-condition': 'error',
        'no-shadow': 'off',
        'no-static-only-class': 'off',
        'no-template-curly-in-string': 'error',
        'no-trailing-spaces': [
            'error',
            {
                ignoreComments: true,
            },
        ],
        'no-use-before-define': 'off',
        'object-shorthand': ['error', 'always'],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
            },
        ],
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: true,
            },
        ],
        'prefer-spread': 'error',
        'prefer-template': 'error',
    },
};
