import globals from 'globals'
import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import importPlugin from 'eslint-plugin-import'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
})

export default [
  {
    ignores: ['dist/', 'eslint.config.js'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { import: importPlugin },
    rules: {
      ...importPlugin.configs.recommended.rules,
    },
  },
  ...compat.extends('airbnb-base'),
  {
    rules: {
      'no-underscore-dangle': [
        'error',
        {
          allow: ['__filename', '__dirname'],
        },
      ],
      'import/extensions': ['error', 'ignorePackages'],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
      semi: 'off',
      '@stylistic/semi': 'off',
      'linebreak-style': 'off',
      'import/no-unresolved': 'off',
      'import/order': 'off',
      'arrow-parens': 'off',
      'no-use-before-define': 'off',
      'brace-style': 'off',
      'max-len': 'off',
      'arrow-body-style': 'off',
      'no-new': 'off',
      'object-curly-newline': 'off',
      'no-param-reassign': 'off',
    },
  },
]