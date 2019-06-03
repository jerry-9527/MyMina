module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    '@typescript-eslint/camelcase': 'off',
    // 类名与接口名必须为驼峰式
    '@typescript-eslint/class-name-casing': 'error',
    // 函数返回值必须与声明的类型一致，【编译阶段检查就足够了】
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 必须设置类的成员的可访问性
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // 约束泛型的命名规则
    '@typescript-eslint/generic-type-naming': 'off',
    // 接口名称必须以 I 开头
    '@typescript-eslint/interface-name-prefix': 'off',
    // 有时需要动态引入，还是需要用 require
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // 这个项目没有三斜线指令怎么活
    '@typescript-eslint/no-triple-slash-reference': 'off',
  },
}