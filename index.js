module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    sourceType: 'module',
    ecmaVersion: 2018,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:promise/recommended',
  ],
  rules: {
    // make typescript eslint rules even more strict
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

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
    'arrow-body-style': 'error',
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-useless-concat': 'error',
    curly: ['error'],
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
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
    },
  ],
  reportUnusedDisableDirectives: true,
};
