import React, {useEffect, useState} from 'react';
import {StyleSheet, Keyboard} from 'react-native';
import {
  Text,
  Container,
  Button,
} from '../../../core/components';
import {useDispatch, useSelector} from 'react-redux';
import {_storeData, _storeDataObject} from '../../../core/network/asyncStorage';
import {useTranslation} from '../../../../src/core/hooks';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {userInputValidation} from '../../../core/validations';
import {TFunction} from 'i18next';
import {registerUser} from '../../../core/network/firebase';
import * as Actions from '../../prelogin/store/actions';
import {useNavigation} from '@react-navigation/core';
import * as Routes from '../../appNavigator/routes';
import {ButtonMode} from '../../../core/types';
import UserAuth from '../../uiview/Auth';

const Registration = () => {
  const [userData, setUserData] = useState<
    | {
        username: string;
        password: string;
      }
    | {}
  >({});
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertContent, setAlertContent] = useState(null);

  const {t} = useTranslation();
  const {country} = useSelector(state => state.userPref);
  const {loading, response, error} = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const clearAuthData = () => {
    setAlertVisible(false);
    setAlertContent(null);
    dispatch(Actions.clearSignupRequest());
  };

  const moveToLoginScreen = () => {
    navigate(Routes.ROUTE_LOGIN_SCREEN);
  };

  useEffect(() => {
    if (error) {
      setAlertVisible(true);
      setAlertContent(error?.error);
    }
  }, [error]);

  useEffect(() => {
    if (response) {
      setAlertVisible(true);
      setAlertContent(response?.data);
      // moveToLoginScreen();
    }
  }, [response]);

  useEffect(() => {
    // clean up
    return () => {
      clearAuthData();
    };
  }, []);

  const getusername = (username?: string) => {
    setUserData({...userData, username: username});
  };

  const getPassword = (password?: string) => {
    setUserData({...userData, password: password});
  };

  const onPress = () => {
    Keyboard.dismiss();
    dispatch(Actions.signupRequest());
   
    // we should always keep in mind to secure the data while communicating 
    // with the Api to secure the data 
    // since I am using Firebase sdk it does this for us 
    // we have many ways to secure the data 
    // like the following
    // const hashedPassword = Crypto.SHA256(password).toString();
    // and similary for the user name or any sensitive data
    registerUser(userData, dispatch, t);
  };

  const formSchem = (t: TFunction) =>
    yup.object().shape(userInputValidation(t)[country]);

  const {
    control,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(formSchem(t)),
  });
 console.log( "DDDDDD" ,errors)
  return (
    <Container style={styles.container}>
      <Container style={styles.registrationForm}>
        <Text style={styles.text}>{t('prelogin.regisgterTitle')}</Text>
        <UserAuth
          alertContent={alertContent}
          alertVisible={alertVisible}
          setAlertVisible = {setAlertVisible}
          errors={errors}
          control={control}
          getusername={getusername}
          getPassword={getPassword}
        />
        <Text style={styles.middletext}>
          {t('prelogin.haveAlreadyAccount')}
        </Text>
        <Button
          label={t('prelogin.login')}
          mode={ButtonMode.TEXT}
          onPress={moveToLoginScreen}
          labelStyle={{fontSize: 18}}
        />
      </Container>
      <Button
        loading={loading}
        disabled={!isValid}
        label={t('global.register')}
        style={styles.button}
        onPress={onPress}
      />
    </Container>
  );
};

export default Registration;

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
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 24,
  },
  countryPicker: {
    flex: 1,
  },
  button: {
    margin: 24,
    width: '85%',
  },
  registrationForm: {width: '85%', flexGrow: 1, justifyContent: 'center'},
  middletext: {alignSelf: 'center', marginVertical: 24},
});
