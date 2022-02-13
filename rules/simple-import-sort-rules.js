module.exports = {
    rules: {
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
