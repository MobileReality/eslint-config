module.exports = {
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'jest', 'simple-import-sort'],
    extends: [
        './configs/eslint',
        './configs/unicorn',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
        require.resolve('./rules/eslint-rules.js'),
        require.resolve('./rules/react/react-rules.js'),
        require.resolve('./rules/react/react-hooks-rules.js'),
        require.resolve('./rules/simple-import-sort-rules.js'),
        'plugin:prettier/recommended',
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
};
