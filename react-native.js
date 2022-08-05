module.exports = {
    env: {
        'react-native/react-native': true,
    },
    extends: ['./react-typescript', './configs/react-native'],
    rules: {
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-require-imports': 'off',
    },
};
