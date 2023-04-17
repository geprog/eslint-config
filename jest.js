// @ts-check
/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const eslintConfig = {
  settings: {
    jest: {
      version: 26,
    },
  },
  overrides: [
    {
      files: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.spec.js',
        '**/*.spec.jsx',
      ],
      env: {
        jest: true, // now **/*.test.js files' env has both es6 *and* jest
      },
      extends: ['plugin:jest/all'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
        'jest/prefer-expect-assertions': ['error', { onlyFunctionsWithAsyncKeyword: true }],
        'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
        'jest/no-hooks': 'off',
        'jest/prefer-snapshot-hint': 'off',
        'jest/require-hook': [
          'error',
          {
            // allow the use of vitest functions
            allowedFunctionCalls: [
              'beforeAll',
              'afterAll',
              'beforeEach',
              'afterEach',
              'describe',
              'it',
              'test',
              'vi.mock',
            ],
          },
        ],
      },
    },
  ],
};

module.exports = eslintConfig;
