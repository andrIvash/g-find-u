module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    moduleNameMapper: {
      '\\.scss$': 'identity-obj-proxy',
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/mocks/fileMock.js",
    },
    setupFiles: ["<rootDir>/tests/jest/jestSetup.js"],
    collectCoverageFrom: ['<rootDir>/src/**/*.(ts|tsx)'],
    coverageThreshold: {
      global: {
        branches: 50, functions: 60, lines: 40, statements: 40
      }
    },
    roots: ['<rootDir>'],
    testRegex: '(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.svg$': '<rootDir>/utils/svgTransform.js',
    },
    testEnvironment: 'jsdom'
  };