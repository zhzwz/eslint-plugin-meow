export default {
  plugins: [
    'eslint-plugin-jsonc',
  ],
  overrides: [
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/no-comments': 'error',
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'license',
              'author',
              'repository',
              'bugs',
              'homepage',
              'funding',
              'unpkg',
              'jsdelivr',
              'private',
              'type',
              'main',
              'module',
              'types',
              'exports',
              'files',
              'bin',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'bundledDependencies',

              'sideEffects',
              'eslintConfig',
              'publishConfig',
            ],
          },
          {
            pathPattern: '^(dependencies|bundledDependencies|devDependencies|optionalDependencies|peerDependencies|peerDependenciesMeta)$',
            order: {
              type: 'asc',
            },
          },
        ],
      },
    },
  ],
}
