const js = require('@eslint/js')
const globals = require('globals')

module.exports = [
  js.configs.recommended,
  {
    ignores: ['eslint.config.js', 'node_modules/**', 'dist/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ['webpack.config.js', 'postcss.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
