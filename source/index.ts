import jsonConfig from './configs/json'
import standardConfig from '././configs/standard'
import packageConfig from './configs/package'
import yamlConfig from './configs/yaml'
import markdownConfig from './configs/markdown'
import vueConfig from './configs/vue'
import reactConfig from './configs/react'

import allConfig from './configs/all'

export default {
  rules: {

  },
  configs: {
    standard: standardConfig,
    vue: vueConfig,
    react: reactConfig,
    json: jsonConfig,
    'package.json': packageConfig,
    yaml: yamlConfig,
    markdown: markdownConfig,

    all: allConfig,
  },
}
