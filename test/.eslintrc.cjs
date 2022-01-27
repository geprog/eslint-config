/* eslint-env node */

require('@geprog/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: ['@geprog'],

  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.cjs'],
  },
};
