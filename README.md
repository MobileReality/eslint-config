# @mobilereality/eslint-config

## Requirements
* for web: `react`, for mobile: `react-native`
* `node: ^16.13`
* `eslint: ^8.8.0`

## Install
1. Install `@mobilereality/eslint-config`, `eslint` and `prettier`:
    ```sh
    yarn add -D @mobilereality/eslint-config eslint@latest prettier@latest
    ```
    or
    ```sh
    npm i -D @mobilereality/eslint-config eslint@latest prettier@latest
    ```

2. Copy `.prettierrc` from `node_modules/@mobile-reality/eslint-config` to your root directory
3. Add to your project root `.eslintrc.js` file and:
   * if you use **React with TypeScript**:
    ```typescript jsx
    module.exports = {
        extends: [
            '@mobilereality'
        ]
    };
    ```
   * if you use **React without TypeScript**:
    ```typescript jsx
    module.exports = {
        extends: [
            '@mobilereality/eslint-config/react-javascript'
        ]
    };
    ```
    * if you use **React Native with TypeScript**:
    ```typescript jsx
    module.exports = {
        extends: [
            '@mobilereality/eslint-config/react-native'
        ]
    };
    ```

### Used packages
* [@react-native-community/eslint-config](https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community)
* [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
* [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser)
* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
* [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)
* [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
* [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
* [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
* [eslint-plugin-react-native](https://github.com/intellicode/eslint-plugin-react-native)
* [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
* [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

## License

[MIT](LICENSE.md)
