import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import AppNavigator from './src/features/appNavigator/index';
import {store, persistor} from './src/state';
import Prepare from './src/features/prepare/Prepare';
import global_en from './src/translations/en/global.json';
import global_ar from './src/translations/ar/global.json';
import global_in from './src/translations/in/global.json';
import global_es from './src/translations/es/global.json';
import i18next from 'i18next';
import {I18nextProvider} from 'react-i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

i18next.init({
  compatibilityJSON: 'v3',
  interpolation: {escapeValue: false},
  lng: 'en',
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
    in: {
      global: global_in,
    },
    es: {
      global: global_es,
    },
  },
});

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
