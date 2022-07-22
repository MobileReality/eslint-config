module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'jest', 'simple-import-sort'],
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
        'react-hooks/exhaustive-deps': 'off',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    ['^\\u0000'],
                    [
                        '^react',
                        '^react-native',
                        '^next',
                        '^axios',
                        '^graphql',
                        '^urql',
                        '^styled-components',
                        '^pages',
                        '^views',
                        '^@?\\w',
                    ],
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                ],
            },
        ],
    },
};
