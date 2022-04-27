export default {
  plugins: [
    // https://github.com/ota-meshi/eslint-plugin-yml
    'eslint-plugin-yml',
  ],
  extends: [
    'plugin:yml/standard',
  ],
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      // https://github.com/ota-meshi/yaml-eslint-parser
      parser: 'yaml-eslint-parser',
      rules: {
        'yml/no-empty-document': 'off',
        'yml/no-empty-mapping-value': 'off',
      },
    },
  ],
}
