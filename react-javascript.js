module.exports = {
    plugins: ['simple-import-sort'],
    extends: ['./configs/eslint', './configs/unicorn', './configs/react'],
    rules: {
        'no-underscore-dangle': 'off',

        'unicorn/filename-case': 'off',
        'unicorn/no-thenable': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/numeric-separators-style': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prefer-regexp-test': 'off',
        'unicorn/prefer-set-has': 'off',
        'unicorn/prefer-spread': 'off',
        'unicorn/template-indent': 'off',
        'unicorn/text-encoding-identifier-case': 'off',

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
