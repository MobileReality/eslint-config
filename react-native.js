module.exports = {
    env: {
        'react-native/react-native': true,
    },
    extends: [
        '@react-native-community',
        require.resolve('./react-javascript.js'),
        require.resolve('./react-typescript.js'),
    ],
    plugins: ['react-native'],
    rules: {
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'off',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-single-element-style-arrays': 'error',
        'react-native/no-raw-text': 'off'
    },
};
