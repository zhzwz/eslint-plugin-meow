export default {
  plugins: [
    // https://github.com/jsx-eslint/eslint-plugin-react
    'eslint-plugin-react',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:meow/standard',
  ],
  settings: {
    react: {
      // version specified must be a valid semver version, or "detect"
      // "detect" automatically picks the version you have installed
      version: '17',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
}
