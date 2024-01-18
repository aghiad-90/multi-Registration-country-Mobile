import {CountryCode} from '../types';
import {get} from 'lodash';
import * as Countries from './';

export const useApplyThem = (countryCode: CountryCode) => {
  const selectedTheme = get(Countries, countryCode);
  return selectedTheme;
};
