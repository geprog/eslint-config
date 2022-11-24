module.exports = {
  extends: ['prettier/prettier'],
  rules: {
    // enable in accordance with https://github.com/prettier/eslint-config-prettier#curly
    curly: ['error', 'all'],

    // save because we aren't using the prettier plugin https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
    'arrow-body-style': 'error',
    'prefer-arrow-callback': 'error',
  },
};
