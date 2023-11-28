// @ts-check
/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const eslintConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    './prettier.js',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:promise/recommended',
  ],
  rules: {
    // enable scope analysis rules
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // make typescript eslint rules even more strict
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',

    'import/no-unresolved': 'off', // disable as this is handled by tsc itself
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-relative-parent-imports': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',

    'no-else-return': ['error', { allowElseIf: false }],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-useless-return': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['src', 'dist'],
      },
    ],
    'no-console': 'warn',
    'no-useless-concat': 'error',
    'prefer-const': 'error',
    'spaced-comment': ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    'no-useless-rename': 'error',
    eqeqeq: 'error',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/*.{ts,vue}'],
      extends: [
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
    },
  ],
  reportUnusedDisableDirectives: true,
};

module.exports = eslintConfig;
