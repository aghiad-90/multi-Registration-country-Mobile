import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  Container,
  CountryPicker,
  Button,
  LanguagePicker,
} from '../../../core/components';
import {CountryCode, LanguageCode} from '../../../core/types';
import {useDispatch, useSelector} from 'react-redux';
import {_storeData, _storeDataObject} from '../../../core/network/asyncStorage';
import {useNavigation} from '@react-navigation/native';
import * as Routes from '../../appNavigator/routes';
import {useTranslation} from '../../../../src/core/hooks';
import * as Actions from '../../prepare/actions';


const WelcomeScreen = () => {
  const [countryCode, setCountryCode] = useState<CountryCode | ''>('');
  const [language, setLanguage] = useState(LanguageCode.English);
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const {t, changeLanguage} = useTranslation();
  const {country, lang} = useSelector(state => state.userPref);
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  const updateCountry = (country: CountryCode) => {
    setCountryCode(country);
    dispatch(Actions.setUserPreferences({country: country, lang: language}));
  };

  useEffect(() => {
    setCountryCode(country);
  }, [country]);

  useEffect(() => {
    setLanguage(lang);
  }, [lang]);

  const onPress = () => {
    _storeDataObject({
      country: countryCode,
      lang: language,
    });
    navigate(Routes.ROUTE_REGISTRATION_SCREEN);
  };

  return (
    <>
      <Container style={styles.container}>
        <Container style={styles.header}>
          <Text style={styles.text}>{t('prelogin.welcome')}</Text>
        </Container>
        <Container style={styles.text}>
          <CountryPicker
            countryCode={countryCode}
            setCountryCode={(val: CountryCode) => updateCountry(val)}
          />
        </Container>
        <Text style={styles.selectLanguage}> {t('global.selectLanguage')}</Text>
        <Container style={styles.dialogContianer}>
          <LanguagePicker
            visible={dialogVisible}
            setVisible={setDialogVisible}
            value={language}
            setValue={setLanguage}
          />
        </Container>
        <Container style={styles.button}>
          <Button
            disabled={!countryCode}
            label={t('global.next')}
            onPress={onPress}
            testID = 'next'
          />
        </Container>
      </Container>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    margin: 24,
  },
  text: {
    color: '#333333',
    textAlign: 'center',
    paddingTop: 100,
    flexGrow: 1,
  },
  countryPicker: {
    flex: 1,
  },
  button: {
    marginBottom: 24,
    marginTop: 24,
  },
  selectLanguage: {
    marginBottom: 12,
  },
  dialogContianer: {
    width: '50%',
  },
});
