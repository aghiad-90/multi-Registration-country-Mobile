import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import AppNavigator from './src/features/appNavigator/index';
import {store, persistor} from './src/state';
import Prepare from './src/features/prepare/Prepare';
import i18next from './src/i18next/index.ts'
import {I18nextProvider} from 'react-i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Prepare>
            <I18nextProvider i18n={i18next}>
              <AppNavigator />
            </I18nextProvider>
          </Prepare>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
