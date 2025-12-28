import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,

  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    files: [
      '**/webpack.config.js',
      '**/postcss.config.js',
      '**/eslint.config.js',
    ],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },

  {
    ignores: ['dist/**'],
  },
]
