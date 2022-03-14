# @mobile-reality/eslint-config
[![Version](https://img.shields.io/npm/v/@mobile-reality/eslint-config?style=for-the-badge)](https://www.npmjs.com/package/@mobile-reality/eslint-config)
[![GitHub stars](https://img.shields.io/github/stars/MobileReality/eslint-config?style=for-the-badge)](https://github.com/MobileReality/react-native-select-pro/stargazers)
[![npm total downloads](https://img.shields.io/npm/dt/@mobile-reality/eslint-config?style=for-the-badge)](https://www.npmjs.com/package/@mobile-reality/eslint-config)
[![npm week downloads](https://img.shields.io/npm/dw/@mobile-reality/eslint-config?style=for-the-badge)](https://www.npmjs.com/package/@mobile-reality/eslint-config)
[![Last master branch commit](https://img.shields.io/github/last-commit/MobileReality/eslint-config/master?style=for-the-badge)](https://github.com/MobileReality/eslint-config/commits/master)
[![License](https://img.shields.io/github/license/MobileReality/eslint-config?style=for-the-badge)](https://github.com/MobileReality/eslint-config/blob/master/LICENSE.md)

---

ESLint configuration of Mobile Reality Team

---

## Table of Contents
- [Requirements](#requirements)
- [Installation and usage for a new project](#installation-and-usage-for-a-new-project)
- [Installation and usage for an existing project](#installation-and-usage-for-an-existing-project)
- [Override](#override)
- [Used packages](#used-packages)
- [License](#license)

## Requirements
* for web: `react`, for mobile: `react-native`
* `node: ^16.13`
* `eslint: ^8.11.0`

## Installation and usage for a new project
1. Install `@mobile-reality/eslint-config`, `eslint` and `prettier`:
    ```sh
    yarn add -D @mobile-reality/eslint-config eslint@latest prettier@latest
    ```
    or
    ```sh
    npm i -D @mobile-reality/eslint-config eslint@latest prettier@latest
    ```

2. Copy `.prettierrc` from `node_modules/@mobile-reality/eslint-config` to your root directory
3. Add to your root `.eslintrc.js` file and:
   * if you are using **React with TypeScript**:
    ```typescript jsx
    module.exports = {
        extends: [
            '@mobile-reality'
        ]
    };
    ```
   * if you are using **React without TypeScript**:
    ```typescript jsx
    module.exports = {
        extends: [
            '@mobile-reality/eslint-config/react-javascript'
        ]
    };
    ```
    * if you are using **React Native with TypeScript**:
    ```typescript jsx
    module.exports = {
        extends: [
            '@mobile-reality/eslint-config/react-native'
        ]
    };
    ```
   
## Installation and usage for an existing project
1. Remove all `ESLint` and `prettier` dependencies (e.g. `eslint`, `prettier`, `eslint-plugin-prettier`, `@typescript-eslint/eslint-plugin` etc.) from package.json
2. Reinstall `node_modules` (so remove them and install with `npm i` or `yarn install`)
3. Go to the [installation step](#installation-and-usage-for-a-new-project)

## Override
You can override rules by adding a rule to the rules section e.g.:
```typescript jsx
    module.exports = {
        extends: [
            '@mobile-reality'
        ],
        rules: {
            "no-console": "off"
        }
    };
```

## Used packages
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
