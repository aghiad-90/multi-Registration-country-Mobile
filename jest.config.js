
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx,js}'],
  coveragePathIgnorePatterns: [
    'styles.ts',
    'Interfaces.ts',
    'src/__mocked__/',
    'Strings.ts',
    'Screen.tsx',
    'src/config/',
    'src/constants',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!expo-linear-gradient|@unimodule/core|react-native-skeleton-content|react-native)/',
  ],
  globals: {
    'ts-config': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
  timers: 'fake',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  setupFiles: [
    '<rootDir>/__tests__/setupTest.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setupTest.js',
    '<rootDir>/__mocked__/*.{ts,tsx}',
    'src/mocks',
    '<rootDir>/src/api/endpoints.ts',
    'Strings.ts',
    'Screen.tsx',
    'src/config',
  ],
  moduleDirectories: ['node_modules', 'test-utils'],
  moduleNameMapper: {
    'styled-components':
      '<rootDir>/node_modules/styled-components/native/dist/styled-components.native.cjs.js',
    '^@mashreq/mashreq-rn-efr$': '<rootDir>/node_modules/@mashreq/mashreq-rn-efr/src/index.js',
  }
};
 