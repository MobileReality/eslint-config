module.exports = {
    plugins: [
        'react',
        'react-hooks',
        'prettier',
        'jsx-a11y',
        'jest',
        'unicorn',
        'simple-import-sort',
    ],
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'eslint:recommended',
        'plugin:unicorn/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
        'prettier',
    ],
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
        node: true,
    },
    globals: {
        JSX: true,
        module: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        jest: {
            version: 27,
        },
        react: {
            version: 'detect',
        },
    },
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
        'prettier/prettier': [
            'error',
            {
                bracketSameLine: false,
                jsxSingleQuote: false,
                printWidth: 80,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
            },
        ],
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/boolean-prop-naming': 'error',
        'react/button-has-type': 'error',
        'react/destructuring-assignment': 'error',
        'react/forbid-prop-types': 'error',
        'react/jsx-curly-brace-presence': 'error',
        'react/jsx-no-useless-fragment': 'error',
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
        'unicorn/catch-error-name': [
            'warn',
            {
                name: 'e',
            },
        ],
        'unicorn/filename-case': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-reduce': [
            'error',
            {
                allowSimpleOperations: true,
            },
        ],
        'unicorn/no-null': 'off',
        'unicorn/no-thenable': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/numeric-separators-style': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prefer-regexp-test': 'off',
        'unicorn/prefer-set-has': 'off',
        'unicorn/prefer-spread': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/template-indent': 'off',
    },
};
