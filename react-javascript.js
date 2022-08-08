module.exports = {
    plugins: ['simple-import-sort'],
    extends: ['./configs/eslint', './configs/unicorn', './configs/react'],
    rules: {
        'no-underscore-dangle': 'off',
        'no-implicit-coercion': [
            'error',
            {
                boolean: false,
            },
        ],

        // disabled because of https://github.com/sindresorhus/eslint-plugin-unicorn/issues/687
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
