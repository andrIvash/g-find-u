const localStorageMock = require('../mocks/localStorageMock');
// const localStorageMock = {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     clear: jest.fn()
//   };

global.localStorage = localStorageMock;