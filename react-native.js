module.exports = {
    env: {
        'react-native/react-native': true,
    },
    extends: [
        '@react-native-community',
        require.resolve('./react-typescript.js'),
        require.resolve('./rules/react/react-native/react-native-rules.js'),
        'plugin:prettier/recommended',
    ],
    plugins: ['react-native'],
};
