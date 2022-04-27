# eslint-plugin-meow

![](https://img.shields.io/npm/v/eslint-plugin-meow)
![](https://img.shields.io/npm/dt/eslint-plugin-meow)
![](https://img.shields.io/bundlephobia/min/eslint-plugin-meow)
![](https://img.shields.io/npm/l/eslint-plugin-meow)

中文 | [English](./README.en.md)

## 安装

- npm
  ```
  npm install --save-dev eslint eslint-plugin-meow
  ```

- yarn
  ```
  yarn add -D eslint eslint-plugin-meow
  ```

- pnpm
  ```
  pnpm add -D eslint eslint-plugin-meow
  ```

## 使用

你可以直接在 `package.json` 中配置 ESLint。

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
  "eslintConfig": {
    "extends": "plugin:meow/all"
  }
}
```

<!--
## 可选配置

|Config Name |                                         |
|:-----------|:----------------------------------------|
|standard    |config for `.js` / `.jsx` / `.ts` / `.tsx` |
|vue         |config for `.vue` (include standard)     |
|json        |config for `.json` / `.json5`            |
|package.json|config for `package.json` (sort keys)    |
|yaml        |config for `.yaml` / `.yml`              |
|markdown    |config for `.md`                         |
|all         |(include all of above)                   | -->

## 开源

MIT © 2022 Coder Zhao
