import * as yup from 'yup';
import {CountryCode} from '../types';
import {TFunction} from 'i18next';

const regularExpression = {
  ALPHABETS_ONLY: `^[a-zA-Z ]+$`,
  FIRST_CHAR_SHOULD_BE_LETTER : '^[A-Za-z]*[A-Za-z][A-Za-z0-9-. _]*$'
}


export const userInputValidation = (t: TFunction) => ({
  [CountryCode.UAE]: {
    userName: yup
      .string()
      .required(t('prelogin.validation.required'))
      .min(5, t('prelogin.validation.userName1')),
    password: yup.string().required().min(6, t('prelogin.validation.psw')),
  },
  [CountryCode.EGYPT]: {
    userName: yup
      .string()
      .matches(regularExpression.ALPHABETS_ONLY, t('prelogin.validation.userName3'))
      .required(t('prelogin.validation.required'))
      .min(5, t('prelogin.validation.userName2')),
    password: yup.string().required().min(6, t('prelogin.validation.psw')),
  },
  [CountryCode.INDIA]: {
    userName: yup
      .string()
      .matches(regularExpression.FIRST_CHAR_SHOULD_BE_LETTER, 'username should start with letter')
      .required(t('prelogin.validation.required'))
      .min(6, t('prelogin.validation.userName3')),
    password: yup.string().required().min(6, t('prelogin.validation.psw')),
  },
  [CountryCode.SPAIN]: {
    userName: yup
      .string()
      .required(t('prelogin.validation.required'))
      .min(5, t('prelogin.validation.userName1')),
    password: yup.string().required().min(6, t('prelogin.validation.psw')),
  },
});
