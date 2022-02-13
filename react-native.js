module.exports = {
    env: {
        'react-native/react-native': true,
    },
    extends: [
        '@react-native-community',
        require.resolve('./react-javascript.js'),
        require.resolve('./react-typescript.js'),
        require.resolve('./rules/react/react-native/react-native-rules.js'),
    ],
    plugins: ['react-native'],
};
