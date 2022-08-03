module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  rules: {
    'no-var': 'off',
    'prefer-destructuring': 'off',
    'prettier/prettier': 'off',
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        assert: 'either'
      }
    ],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/self-closing-comp': ['error'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_[a-z]',
        argsIgnorePattern: '^_[a-z]'
      }
    ],
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_[a-z]',
        argsIgnorePattern: '^_[a-z]'
      }
    ],
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: false
      }
    ]
  }
};
