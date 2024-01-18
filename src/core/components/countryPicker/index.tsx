import React from 'react';
import {StyleSheet} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {Container, Text} from '../';
import {_retrieveData, _storeData} from '../../network/asyncStorage';
import {useTranslation} from '../../../../src/core/hooks';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
  },
  welcome: {
    marginBottom: 24,
  },
});

const CountryPickerModal = (props: any) => {
  const {countryCode, setCountryCode} = props;
  const {t} = useTranslation();

  const onSelect = country => {
    setCountryCode(country.cca2);
  };

  return (
    <Container style={styles.container}>
      <Text style={styles.welcome}>{t('global.countrySelect')}</Text>
      <CountryPicker
        {...{
          countryCode,
          withFilter: true,
          withFlag: true,
          withCountryNameButton: true,
          withAlphaFilter: true,
          onSelect,
        }}
      />
    </Container>
  );
};

export default CountryPickerModal;
