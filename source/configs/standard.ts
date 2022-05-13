export default {
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-html',
    'eslint-plugin-import',
    'eslint-plugin-n',
    'eslint-plugin-promise',
  ],
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    // https://github.com/import-js/eslint-plugin-import#settings
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    'no-empty': 'off',

    'no-tabs': 'error',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: [
        'TemplateLiteral *',
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXFragment',
        'JSXOpeningFragment',
        'JSXClosingFragment',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
        'TSTypeParameterInstantiation',
      ],
      offsetTernaryExpressions: true,
    }],
    // 符号
    semi: 'off', // No `;`
    '@typescript-eslint/semi': ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true }], // 单引号
    'quote-props': ['error', 'as-needed'], // 对象字面量属性名称如非必要不使用引号
    'jsx-quotes': ['error', 'prefer-double'], // [--fix] 强制所有不包含双引号的 JSX 属性值使用双引号
    'comma-dangle': 'off', // 逗号
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],

    // 大括号，typescript 添加了针对 enum, interface, namespace, module declarations 的支持
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
    'block-spacing': ['error', 'always'],
    curly: ['error', 'multi-line'], // if 或 else if 或 else 或 for 或 while 或 do 默认使用大括号，单行可省略
    // Space
    'no-multi-spaces': 'error', // 禁止连续的空格
    'no-trailing-spaces': 'error', // 禁止行尾的空格
    'template-curly-spacing': ['error', 'never'], // 模板字符串的大括号内部，前后无空格
    'object-curly-spacing': 'off', // 对象的大括号内部，前后有空格
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], // 对象键值间空格 // { key: value }
    'keyword-spacing': ['error', { before: true, after: true }], // 关键字，前后有空格
    'space-before-blocks': ['error', 'always'], // 语句块前有空格 // if (true) {}
    'space-before-function-paren': ['error', 'never'], // 在 function 的左括号之前，无空格
    'space-in-parens': ['error', 'never'], // 小括号内侧头尾无空格
    'space-infix-ops': ['error', { int32Hint: false }], // 中缀操作符前后有空格
    'space-unary-ops': ['error', { words: true, nonwords: false }], // 一元操作符，前后有空格
    'switch-colon-spacing': ['error', { before: false, after: true }], // switch 分支中冒号后有空格
    'template-tag-spacing': ['error', 'never'], // 模板标记与字面量之间无空格 // template`...`
    'arrow-spacing': ['error', { before: true, after: true }], // 箭头函数的箭头，前后有空格
    'rest-spread-spacing': 'error', // 剩余运算符或扩展运算符与其表达式之间，无空格 // ...rest
    'array-bracket-spacing': ['error', 'never'], // 数组的中括号内部，前后无空格 // [1, 2, 3]
    'no-whitespace-before-property': 'error', // [--fix] 禁止属性前有空格
    'computed-property-spacing': ['error', 'never'], // [--fix] 计算属性的中括号内部无空格
    // \n
    'linebreak-style': ['error', 'unix'], // 指定的换行符
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }], // 最大连续空行数
    'eol-last': ['error', 'always'], // 文件末尾空行
    'padded-blocks': ['error', 'never'], // [--fix] 代码块内侧头尾无换行
    'multiline-ternary': ['error', 'always-multiline'], // 三元操作符，按需换行
    'object-curly-newline': ['error', { consistent: true }], // 对象的大括号内部，按需换行
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }], // 允许所有属性同行
    'operator-linebreak': ['error', 'before'], // 在操作符前换行
    // Comment
    'spaced-comment': ['error', 'always', {
      exceptions: ['-', '+', '*'],
      markers: ['/'], // e.g. `/// <reference types="..." />`
      block: {
        exceptions: ['*'],
        markers: ['!'],
        balanced: true, // balanced space in a block comment: /* comment */
      },
    }], // 注释文字前，必须有空格
    'multiline-comment-style': ['error', 'separate-lines'], // 除了 JSDoc，只允许单行注释
    // 'lines-around-comment': ['error', { beforeBlockComment: true }], // 多行注释前空行
    'no-warning-comments': ['error', { terms: ['TODO', 'FIXME'] }], // 禁用指定的注释
    // Variable
    'no-var': 'error', // 优先使用 let 或 const
    'prefer-const': 'error', // 优先使用 const
    'no-undef-init': 'error', // [--fix] 禁止将变量初始化为 undefined
    'no-redeclare': 'off', // 禁止重新声明变量
    '@typescript-eslint/no-redeclare': 'error',
    'no-use-before-define': 'off', // 禁止在变量声明之前使用变量
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    // String
    'no-multi-str': 'error', // 不允许用 \ 作为行尾的多行字符串
    'prefer-template': 'error', // 优先使用模板字面量而非字符串连接
    'no-useless-concat': 'error', // 禁止出现没必要的字符串拼接
    'no-template-curly-in-string': 'error', // 禁止常规字符串中出现 ${} // 'My name is ${name}.'
    // Number
    'no-octal-escape': 'error', // 禁止在字符串字面量中使用八进制转义序列
    'no-floating-decimal': 'error', // [--fix] 禁止数值的小数点前或后缺少数字
    // Array
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'array-callback-return': 'error', // 强制数组方法的回调函数中有 return 语句
    'no-array-constructor': 'error', // 禁用 Array 构造函数
    // Object
    'dot-location': ['error', 'property'], // 点号和属性同行
    'no-extend-native': 'error', // 禁止扩展原生对象
    'object-shorthand': ['error', 'always'], // 优先使用简写的对象字面量
    'prefer-object-spread': 'error', // 优先使用对象扩展而不是 Object.assign
    'prefer-spread': 'error', // 优先使用扩展运算符而非 .apply()
    'no-useless-computed-key': 'error', // 清理不必要的计算属性
    // class
    'no-invalid-this': 'error', // 禁止 this 关键字出现在类或类对象之外
    'class-methods-use-this': 'error', // 类方法中必须存在 this
    'no-useless-constructor': 'error', // 禁用不必要的构造函数
    // new
    'no-new': 'error', // 清理不必要的 new
    'new-parens': 'error', // 调用无参构造函数时必须带括号
    'no-new-object': 'error', // 禁用 Object 的构造函数
    'no-new-wrappers': 'error', // 禁止对 String 或 Number 或 Boolean 使用 new 操作符

    // 控制语句
    'default-case': 'error', // switch 必须存在 default 分支
    'guard-for-in': 'error', // for in 遍历对象必须使用 if 筛查
    'no-else-return': ['error', { allowElseIf: false }], // [--fix] 禁止 if 语句中 return 语句之后有 else 或 else if
    'no-loop-func': 'error', // 禁止在循环中创建函数
    'no-unmodified-loop-condition': 'error', // 禁止出现不变的循环条件
    yoda: ['error', 'never', { exceptRange: true }], // 禁止 yoda 条件

    // Function
    // 'func-call-spacing': ['error', 'never'], // fn()
    // 'func-names': 'error', // function 表达式必须命名，有利于 debug
    // 'func-name-matching': 'error', // 强制函数名与赋值给它的变量名或属性名相匹配
    'function-paren-newline': ['error', 'consistent'], // [--fix] 函数的参数括号内智能换行
    'no-extra-bind': 'error', // 清理不必要的 bind
    'no-useless-call': 'error', // 清理不必要的 call 或 apply
    'no-param-reassign': 'error', // 不允许对参数重新赋值
    'wrap-iife': ['error', 'inside'], // IIFE 的函数声明必须使用小括号包裹
    'require-await': 'error', // 禁止使用不带 await 表达式的 async 函数
    // 'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // 要么使用函数声明，要么使用箭头函数表达式
    // Arrow
    'arrow-parens': ['error', 'as-needed'], // 箭头函数的参数，按需使用小括号
    'no-confusing-arrow': ['error', { allowParens: true }], // 在可能与比较操作符相混淆的地方，不允许使用箭头函数
    'prefer-arrow-callback': 'error', // 优先使用箭头函数作为回调函数
    'implicit-arrow-linebreak': ['error', 'beside'], // 箭头函数的隐式返回，不换行

    // Return
    'no-return-await': 'error', // 清理不必要的 return await
    'no-return-assign': 'error', // 不允许在 return 时赋值
    'no-useless-return': 'error', // 清理不必要的 return

    // RegExp
    'wrap-regex': 'error', // 必须使用小括号包裹
    'prefer-named-capture-group': 'error', // 必须使用命名捕获组
    // 'require-unicode-regexp': 'error', // 必须使用 u 标志
    'no-div-regex': 'error', // 禁止除法操作符显式的出现在正则表达式开始的位置，容易造成歧义 // /=1/

    // Promise
    'prefer-promise-reject-errors': 'error', // reject() 必须使用 Error 对象
    'promise/param-names': 'error',

    // No
    'no-eval': 'error',
    'no-void': 'error',
    'no-alert': 'error', // No `alert`, `confirm`, `prompt`
    'no-labels': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-new-func': 'error', // e.g. new Function('...')
    'no-proto': 'error',
    'no-iterator': 'error',
    'unicode-bom': ['error', 'never'], // No Unicode BOM
    'no-sequences': 'error', // e.g. `a, b`
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-await-in-loop': 'error',
    'no-implicit-coercion': 'error', // No `~`, `!!`, `+`, `*`
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // Only allow `++`, `--` in for-loop
    'no-implied-eval': 'error', // e.g. `setTimeout("alert('Hi!')", 100)`
    'no-script-url': 'error', // e.g. `location.href = "javascript:void(0)"`

    // import
    'import/order': 'error',
    // 'import/first': 'error',
    'import/no-unresolved': 'off',
    'import/no-mutable-exports': 'error',
    'import/export': 'error',
    'import/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    // 'sort-imports': ['error', {
    //   ignoreCase: false,
    //   ignoreMemberSort: false,
    //   ignoreDeclarationSort: true,
    //   memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    // }],

    // Node
    'global-require': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'callback-return': 'error',
    'no-mixed-requires': 'error',
    'no-buffer-constructor': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-callback-literal': 'error',
    'n/process-exit-as-throw': 'error',
    'n/handle-callback-err': ['error', '^(err|error)$'],

    'operator-assignment': 'error', // e.g. `a = a + 1` => `a += 1`

    radix: 'error', // e.g. `parseInt('010', 10)`
    eqeqeq: 'error',
    // 禁止未使用的表达式
    'no-unused-expressions': 'error',
    // 禁止自身比较
    'no-self-compare': 'error', // if (foo === foo) { ... }
    // 禁止随意抛出异常，只允许 Error
    'no-throw-literal': 'error', // throw new Error('...')
    'no-multi-assign': 'error', // e.g. `var a = b = c = 1`
    // 'no-negated-condition': 'error', // e.g. `if (!condition) {...}`
    'prefer-destructuring': 'error', // e.g. `const { a, b } = obj`
    'prefer-rest-params': 'error', // No arguments. e.g. `function foo(...args) {...}`
    'symbol-description': 'error', // Symbol must have description parameter

    // Useless
    'no-useless-rename': 'error', // e.g. `import { foo as foo } from '...'`
    'no-unneeded-ternary': 'error', // e.g. `condition ? true : false`

    // Typescript
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/type-annotation-spacing': ['error', {}],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    // Typescript off
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

  },
  overrides: [
    {
      files: ['scripts/**/*.*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
  ],
  ignorePatterns: [
    '!.github',
    '!.vscode',
    '!.eslintrc*',
    'dist',
    'temp',
    'public',
    'node_modules',
    '*.min.*',
    'LICENSE*',
    'CHANGELOG.md',
    'yarn.lock',
    'pnpm-lock.yaml',
    'packages-lock.json',
  ],
}
