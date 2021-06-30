module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    // enable in accordance with https://github.com/prettier/eslint-config-prettier#curly
    curly: ['error', 'all'],

    // risky because of https://github.com/prettier/eslint-plugin-prettier#arrow-body-style-and-prefer-arrow-callback-issue
    'arrow-body-style': 'error',
    'prefer-arrow-callback': 'error',
  },
};
