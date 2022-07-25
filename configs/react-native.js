module.exports = {
    plugins: ['react-native'],
    rules: {
        'react-native/no-unused-styles': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-single-element-style-arrays': 'error',
        'react-native/split-platform-components': 'off',
        'react-native/no-raw-text': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-require-imports': 'off',
    },
};
