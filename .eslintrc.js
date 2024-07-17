module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  ignorePatterns: [
    '**/*.mdx',
    '**/*.css',
    'src/scripts/*.js',
    'src/**/*.typegen.ts',
  ],
  rules: {
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'ignores': ['router-link'],
      'allowEmptyLines': false,
    }],
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/indent': ['error', 2],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single', {
        'allowTemplateLiterals': true,
      },
    ],
    'semi': [
      'error',
      'never',
    ],
    'space-before-function-paren': [
      'error',
      'always',
    ],
    'keyword-spacing': [
      'error',
    ],
    'space-before-blocks': [
      'error',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      },
    ],
  },
}
