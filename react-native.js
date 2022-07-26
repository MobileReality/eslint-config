module.exports = {
    env: {
        'react-native/react-native': true,
    },
    extends: [
        './configs/eslint',
        './configs/typescript',
        './configs/unicorn',
        './configs/react',
        './configs/react-native',
        './configs/jest',
        'plugin:prettier/recommended',
    ],
};
