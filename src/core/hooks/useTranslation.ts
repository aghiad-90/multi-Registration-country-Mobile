import {useTranslation as useI18Translation} from 'react-i18next';
import {LanguageCode} from '../types';

const useTranslation = () => {
  const [t, i18n] = useI18Translation('global');

  const changeLanguage = (lang: LanguageCode) => {
    i18n.changeLanguage(lang);
  };

  return {t, changeLanguage};
};

export default useTranslation;
