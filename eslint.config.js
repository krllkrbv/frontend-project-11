import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    ignores: ['dist/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    files: [
      'eslint.config.js',
      'webpack.config.js',
      'postcss.config.js',
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
