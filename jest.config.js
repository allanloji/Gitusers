module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    'hooks/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
    '!pages/_app.tsx',
    'utils/**/*.{ts,tsx}',
    '!**/**/index.ts',
    '!**/**/types.ts',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // moduleDirectories: ['node_modules', './'],
  rootDir: './',
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/components/$1',
    '^hooks/(.*)$': '<rootDir>/hooks/$1',
    '^pages/(.*)$': '<rootDir>/pages/$1',
    '^utils/(.*)$': '<rootDir>/utils/$1',
    '^jest/(.*)$': '<rootDir>/jest/$1',
    '^mocks(.*)$': '<rootDir>/mocks/$1',
  },
};
