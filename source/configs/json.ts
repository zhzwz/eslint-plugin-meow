export default {
  plugins: [
    'eslint-plugin-jsonc',
  ],
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        // no empty lines
        'no-multiple-empty-lines': ['error', { max: 0, maxBOF: 0, maxEOF: 0 }],

        'jsonc/indent': ['error', 2],

        'jsonc/comma-dangle': ['error', { arrays: 'never', objects: 'never' }],
        'jsonc/comma-style': ['error', 'last'],

        'jsonc/quote-props': ['error', 'always'],
        'jsonc/quotes': ['error', 'double', { avoidEscape: false }],

        'jsonc/array-bracket-spacing': 'error',
        'jsonc/array-bracket-newline': ['error', 'consistent'],
        'jsonc/array-element-newline': ['error', 'consistent'],

        'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-curly-newline': ['error', { consistent: true, minProperties: 4 }],
        'jsonc/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      },
    },
  ],
}
