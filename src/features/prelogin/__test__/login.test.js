import React from 'react';
import {TextInput} from 'react-native';
import {it} from '@jest/globals';
import Login from '../screens/Login';
import {fireEvent, render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../../../state';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

const mockedDispatch = jest.fn();

jest.mock('../../../core/hooks', () => ({
  useTranslation: () => ({
    t: jest.fn(),
    changeLanguage: jest.fn(),
  }),
}));

jest.mock('../../../core/components/TextInput', () => {
  const RealComponent = jest.requireActual(
    '../../../core/components/CountryPicker',
  );
  const React = require('react');
  class TextInput extends React.Component {
    render() {
      return React.createElement('TextInput', this.props, this.props.children);
    }
  }
  TextInput.propTypes = RealComponent.propTypes;
  return TextInput;
});

jest.doMock('../../../core/components/TextInput', () => {
  return <TextInput testID="testMocked" value="" />;
});

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn(),
    changeLanguage: jest.fn(),
  }),
  useI18Translation: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => mockedDispatch),
  useSelector: jest.fn(),
}));

const mockState = {
  authReducer: {
    loading: false,
    error: null,
    resoonse: null,
  },
  userPref: {
    country: '',
  },
};

jest.mock('react-hook-form', () => ({
  useForm: jest.fn(() => ({
    control: jest.fn,
  })),
}));

describe('testing Login Screen', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockState);
    });
  });

  beforeEach(() => {
    useForm.mockImplementation(() => ({
      formState: {
        errors: {userName: '', password: ''},
        isDirty: true,
        isSubmitting: false,
        isValid: true,
      },
    }));
  });

  it('text input (username and password should change correctly) and if the form is Valid then the button should be enabled', () => {
    const tree = render(
      <Provider store={store}>
        <NavigationContainer>
          <Login />
        </NavigationContainer>
      </Provider>,
    );
    expect(tree.getByTestId('usernameTextInput')).toBeTruthy();
    const usernameInput = tree.getByTestId('usernameTextInput');
    const passowrdInput = tree.getByTestId('passwordTextInput');
    const button = tree.getByTestId('button');
    fireEvent.changeText(usernameInput, 'Aghiad');
    fireEvent.changeText(passowrdInput, '*****');
    expect(usernameInput.props.value).toEqual('Aghiad');
    expect(passowrdInput.props.value).toEqual('*****');
    expect(button.props.accessibilityState.disabled).toBeFalsy();
  });
});

describe('testing Login Screen', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockState);
    });
  });

  beforeEach(() => {
    useForm.mockImplementation(() => ({
      formState: {
        errors: {userName: 'username error', password: ''},
        isDirty: true,
        isSubmitting: false,
        isValid: false,
      },
    }));
  });

  it('if the form is not valid button should not be disabled', () => {
    const tree = render(
      <Provider store={store}>
        <NavigationContainer>
          <Login />
        </NavigationContainer>
      </Provider>,
    );
    const button = tree.getByTestId('button');
    expect(button.props.accessibilityState.disabled).toBeTruthy();
  });
});
