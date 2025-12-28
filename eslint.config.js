import globals from 'globals'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/semi': ['error', 'never'],
    },
  },

  {
    ignores: ['dist/**'],
  },
]
