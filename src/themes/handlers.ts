import {DefaultTheme} from 'react-native-paper';
import {useApplyThem} from './useApplyTheme';

export const getTheme = (Colors: any) => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.PRIMARY,
      secondary: Colors.SECONDARY,
    },
  };
  return theme;
};

export const getSelectedTheme = ({CountryCode}: CountryCode) => {
  return useApplyThem(CountryCode);
};
