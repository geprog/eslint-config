// @ts-check
/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const eslintConfig = {
  env: {
    browser: true,
    'vue/setup-compiler-macros': true,
  },

  parser: 'vue-eslint-parser',
  parserOptions: {
    // @ts-ignore see https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },

  extends: [
    './index.js',
    './jest.js',

    'plugin:vue/vue3-recommended',
    './prettier.js',
    'plugin:vue-scoped-css/recommended',
    'plugin:@intlify/vue-i18n/recommended',
  ],

  rules: {
    'vue/attribute-hyphenation': 'error',
    // enable in accordance with https://github.com/prettier/eslint-config-prettier#vuehtml-self-closing
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
    'vue/no-static-inline-styles': 'error',
    'vue/v-on-function-call': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-concat': 'error',
    'vue/no-boolean-default': 'error',
    'vue/html-button-has-type': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
        shouldMatchCase: true,
      },
    ],
    'vue/require-name-property': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed', 'methods', 'setup'],
      },
    ],
    'vue/new-line-between-multi-line-property': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names ': 'off',

    // i18n rules
    '@intlify/vue-i18n/valid-message-syntax': 'error',
    '@intlify/vue-i18n/no-missing-keys': 'error',
    '@intlify/vue-i18n/key-format-style': ['error', 'snake_case'],
    '@intlify/vue-i18n/no-unused-keys': [
      'error',
      {
        src: './src',
        extensions: ['.ts', '.vue'],
      },
    ],
    '@intlify/vue-i18n/no-raw-text': [
      'error',
      {
        ignorePattern: '^[:]+$',
      },
    ],

    // css rules
    'vue-scoped-css/no-unused-selector': 'error',
    'vue-scoped-css/no-parsing-error': 'error',
    'vue-scoped-css/require-scoped': 'error',
  },

  settings: {
    'vue-i18n': {
      localeDir: './src/locales/*.json',

      // Specify the version of `vue-i18n` you are using.
      // If not specified, the message will be parsed twice.
      messageSyntaxVersion: '^9.0.0',
    },
  },

  overrides: [
    {
      files: ['*.json'],
      extends: ['plugin:@intlify/vue-i18n/base'],
    },
  ],
};

module.exports = eslintConfig;
