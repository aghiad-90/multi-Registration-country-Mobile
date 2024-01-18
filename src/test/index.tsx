import React from 'react';
import {render} from '@testing-library/react-native';
import { ThemeProvider} from 'react-native-paper';
// import renderer from 'reactrende'
// import {getSelectedTheme} from '../themes/handlers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import {appReducer} from '../state/reducer';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from '../features/appNavigator'


// const AllTheProviders = ({children}) => {
//   return <ThemeProvider theme = {{}}>{children}</ThemeProvider>;
// };

const customRender = (ui, options) =>
  render(ui, {...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {renderWithRedux as render};

function renderWithRedux(ui: any, state: any) {
  const store = createStore(appReducer, state);
  return {
    ...customRender(
    <Provider store={store}>  
    <I18nextProvider i18n={i18n}>
      {ui}
    </I18nextProvider>
    </Provider>  
      , {}),
    store,
  };
}


const Stack = createStackNavigator();
export const MockedNavigator = ({ component: Component, params = {}, extraProps = {} }: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen
          name="MockedScreen"
          initialParams={params}
        > 
          {(props) => <Component {...props} {...extraProps} />}
          </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
};