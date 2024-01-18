import {useEffect, useState} from 'react';
import {_retrieveDataObject} from '../../core/network/asyncStorage';
import {CountryCode, LanguageCode} from '../../core/types/index';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from './actions';
import {DefaultTheme, ThemeProvider} from 'react-native-paper';
import {getSelectedTheme} from '../../themes/handlers';
import {requestUserPermission, registerForPushNotifications} from '../../modules/pushNotifications'

const Prepare = ({children}: any) => {
  const dispatch = useDispatch();
  const {country} = useSelector(state => state.userPref);


  const checkUserPref = async () => {
    const userPrefer = await _retrieveDataObject('key');
    if (!userPrefer) {
      dispatch(
        Actions.setUserPreferences({
          country: CountryCode.UAE,
          lang: LanguageCode.English,
        }),
      );
    } else {
      const {country, lang} = userPrefer;
      dispatch(
        Actions.setUserPreferences({
          country: country,
          lang: lang,
          theme : country
        }),
      );
    }
  };

  const requestForFirebasePushNotifications = () => {
    const result = requestUserPermission();
    if(result) {
      registerForPushNotifications()
    }
  }

  useEffect(() => {
    // if there is no Language stored in the App
    // select the default country which is AE
    // And English as default Language
    checkUserPref();
    requestForFirebasePushNotifications()
  }, []);

  return (
    <ThemeProvider theme={getSelectedTheme({CountryCode: country})}>
      {children}
    </ThemeProvider>
  );
};

export default Prepare;
