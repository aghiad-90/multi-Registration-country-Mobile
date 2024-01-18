jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('@react-navigation/stack', () => {});

jest.mock('react-native-country-picker-modal', () => {});
jest.mock('react-native-dropdown-picker', () => {});
jest.mock('react-native-safe-area-context', () => {});

jest.mock('react-native-paper', () => ({
  __esModule: true,
  default: {
    Diallog:  {
      Content : jest.fn(),
      Actions : jest.fn()
    },
    Button: jest.fn(),
    ThemeProvider : jest.fn()
  },
}));

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-gesture-handler', () => {
  return {
    ...jest.requireActual('react-native-gesture-handler'),
  }
})
jest.mock('@react-native-firebase/auth' , () => {})

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    navigate : mockedNavigate
  }
})

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-paper', () => ({
  Dialog: () => ({
    Actions: jest.fn(),
    Content : jest.fn()
  }),
  useTheme: () => ({
    colors: {
      primary: 'blue',
      secondary: 'green',
    },
  }),
}));