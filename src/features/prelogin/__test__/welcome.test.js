import React from 'react';
import {it} from '@jest/globals';
import Welcome from '../screens/Welcome';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../../../state';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const mockedDispatch = jest.fn();

jest.mock('../../../core/hooks', () => ({
    useTranslation: () => ({
      t: jest.fn(),
      changeLanguage : jest.fn()
    })
  }));

jest.mock('../../../core/components/CountryPicker', () => {
    const RealComponent = jest.requireActual('../../../core/components/CountryPicker');
    const React = require('react');
    class Text extends React.Component {
      render() {
        return React.createElement('Text', this.props, this.props.children);
      }
    }
    Text.propTypes = RealComponent.propTypes;
    return Text;
  });

  jest.mock('../../../core/components/LanguagePicker', () => {
    const RealComponent = jest.requireActual('../../../core/components/LanguagePicker');
    const React = require('react');
    class View extends React.Component {
      render() {
        return React.createElement('View', this.props, this.props.children);
      }
    }
    View.propTypes = RealComponent.propTypes;
    return View;
  });



  jest.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: jest.fn(),
      changeLanguage : jest.fn()
    }),
    useI18Translation : jest.fn()
  }));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => mockedDispatch),
  useSelector: jest.fn(),
}));

const mockState = {
  userPref: {
    country: '',
    lang: '',
  },
};

const mockStatea= {
    userPref: {
      country: 'AE',
      lang: '',
    },
  };


describe('Next button should be disabled if the country selected', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockState);
    });
  });
  it('it should render the User name correctly and if Sign out clicked it should show the modal', () => {
    const tree = render(
      <Provider store={store}>
        <NavigationContainer>
          <Welcome />
        </NavigationContainer>
      </Provider>,
    );
    
    expect(1).toEqual(1);
    expect(tree.getByTestId('next').props.accessibilityState.disabled).toBeTruthy();
  });
});


describe('Next button should be enabled if the country selected', () => {
    beforeEach(() => {
      useSelector.mockImplementation(callback => {
        return callback(mockStatea);
      });
    });
    it('it should render the User name correctly and if Sign out clicked it should show the modal', () => {
      const tree = render(
        <Provider store={store}>
          <NavigationContainer>
            <Welcome />
          </NavigationContainer>
        </Provider>,
      );
      
      expect(1).toEqual(1);
      expect(tree.getByTestId('next').props.accessibilityState.disabled).toBeFalsy();
    });
  });
  
