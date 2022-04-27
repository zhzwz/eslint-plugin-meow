# eslint-plugin-meow

![](https://img.shields.io/npm/v/eslint-plugin-meow)
![](https://img.shields.io/npm/dt/eslint-plugin-meow)
![](https://img.shields.io/bundlephobia/min/eslint-plugin-meow)
![](https://img.shields.io/npm/l/eslint-plugin-meow)

[中文](./README.md) | English

## Installation

```
# npm
npm install --save-dev eslint eslint-plugin-meow

# or yarn
yarn add -D eslint eslint-plugin-meow

# or pnpm
pnpm add -D eslint eslint-plugin-meow
```

## Usage

You can configure eslint in `package.json`.

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


<!-- ## Optional

|Config Name |                                           |
|:-----------|:------------------------------------------|
|standard    |config for `.js` / `.jsx` / `.ts` / `.tsx` |
|vue         |config for `.vue` (include standard)       |
|json        |config for `.json` / `.json5`              |
|package.json|config for `package.json` (sort keys)      |
|yaml        |config for `.yaml` / `.yml`                |
|markdown    |config for `.md`                           |
|all         |(include all of above)                     | -->

## License

MIT © 2022 Coder Zhao
