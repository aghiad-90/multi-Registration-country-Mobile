import {_storeDataObject} from '../../../core/network/asyncStorage';
import * as Routes from '../../appNavigator/routes';

export const onPress = ({navigate, countryCode, language}) => {
  _storeDataObject({
    country: countryCode,
    lang: language,
  });
  navigate(Routes.ROUTE_REGISTRATION_SCREEN);
};
