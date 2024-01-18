import React from 'react';
import 'react-native';
import {it} from '@jest/globals';
import Dashboard from '../screens/Dashboard';
import {screen, fireEvent, render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../../../state';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => mockedDispatch),
  useSelector: jest.fn(),
}));

const mockState = {
  authReducer: {
    response: {
      user: {
        email: 'aghiad@gmail.com',
      },
    },
  },
};

describe('testing Dashboard Screen', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockState);
    });
  });
  it('it should render the User name correctly and if Sign out clicked it should show the modal', () => {
    const tree = render(
      <Provider store={store}>
        <NavigationContainer>
          <Dashboard />
        </NavigationContainer>
      </Provider>,
    );
    console.log(tree.getByTestId('userName').children[0]);
    expect(tree.getByTestId('signOut')).toBeTruthy();
    fireEvent.press(screen.getByTestId('signOut'));
    expect(tree.getByTestId('modal')).toBeTruthy();
    fireEvent.press(screen.getByTestId('close'));
    expect(tree.queryByTestId('modal')).toBeFalsy()
  });
});
