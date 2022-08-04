const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@app': path.resolve(__dirname, './src/app/'),
      '@features': path.resolve(__dirname, './src/features/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@posts': path.resolve(__dirname, './src/features/posts'),
      '@users': path.resolve(__dirname, './src/features/users')
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@app(.*)$': '<rootDir>/src/app$1',
        '^@features(.*)$': '<rootDir>/src/features$1',
        '^@pages(.*)$': '<rootDir>/src/pages$1',
        '^@posts(.*)$': '<rootDir>/src/features/posts$1',
        '^@users(.*)$': '<rootDir>/src/features/users$1'
      }
    }
  }
};
