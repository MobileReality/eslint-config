module.exports = {
    plugins: ['simple-import-sort'],
    extends: ['./configs/eslint', './configs/unicorn', './configs/react'],
    rules: {
        'no-underscore-dangle': 'off',
        'no-shadow': 'off',
        'no-empty-function': [
            'error',
            {
                allow: ['arrowFunctions'],
            },
        ],
        'no-implicit-coercion': [
            'error',
            {
                boolean: false,
            },
        ],

        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prefer-spread': 'off',
        'unicorn/template-indent': [
            'error',
            {
                indent: 4,
            },
        ],

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
