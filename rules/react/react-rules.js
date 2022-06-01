module.exports = {
    rules: {
        'react/boolean-prop-naming': 'error',
        'react/button-has-type': 'error',
        'react/destructuring-assignment': 'error',
        'react/forbid-prop-types': 'error',
        'react/jsx-curly-brace-presence': 'error',
        'react/jsx-no-useless-fragment': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        'react/jsx-pascal-case': 'error',
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                noSortAlphabetically: true,
                reservedFirst: true,
                shorthandLast: true,
            },
        ],
        'react/no-danger': 'warn',
        'react/no-typos': 'error',
        'react/prop-types': 'off',
        'react/self-closing-comp': 'error',
    },
};
