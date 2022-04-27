import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'source/index',
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
