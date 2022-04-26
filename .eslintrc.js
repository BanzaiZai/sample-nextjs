module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'next',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': ['error', { ignore: ['^#'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
  },
  globals: {
    document: true,
    window: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
      alias: {
        map: [
          ['#modules/*', './modules/*'],
          ['#pages/*', './pages/*'],
          ['#public/*', '/public/*'],
          ['#styles/*', '.styles/*'],

          ['#components/*', './src/components/*'],
          ['#config/*', './src/config/*'],
          ['#helpers/*', './src/helpers/*'],
          ['#hooks/*', '.src/hooks/*'],
          ['#layouts/*', './src/layouts/*'],
          ['#services/*', '.src/services/*'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
