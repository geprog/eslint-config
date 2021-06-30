# GeProg eslint config

Opinionated eslint config for projects using Vue.js with Typescript and Jest

## Usage

```js
require('@geprog/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: ['@geprog'],
  parserOptions: {
    project: ['./tsconfig.json'], // should "include" all files you want to lint
    tsconfigRootDir: __dirname,
  },
};
```

## Available configs

- `@geprog`
- `@geprog/eslint-config/vue`
- `@geprog/eslint-config/jest`

## Development

Install dependencies: `pnpm install`

### Releasing

1. Bump version in `package.json`
1. Run `pnpm publish`
1. Create git tag.
