export default {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'type-enum': [2, 'always', [
      'chore',
      'docs',
      'style',
      'feat',
      'fix',
      'perf',
      'refactor',
      'test',
      'build',
      'ci',
      'revert',
    ]],
  },
}
