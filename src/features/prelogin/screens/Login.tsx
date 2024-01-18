import React, {useEffect, useState} from 'react';
import {StyleSheet, Keyboard} from 'react-native';
import {
  Text,
  Container,
  TextInput,
  Button,
  Alert,
} from '../../../core/components';
import {useDispatch, useSelector} from 'react-redux';
import {_storeData, _storeDataObject} from '../../../core/network/asyncStorage';
import {useTranslation} from '../../../../src/core/hooks';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {userInputValidation} from '../../../core/validations';
import {TFunction} from 'i18next';
import {loginUser} from '../../../core/network/firebase';
import * as Actions from '../../prelogin/store/actions';
import {useNavigation} from '@react-navigation/native';
import * as Routes from '../../appNavigator/routes';
import UserAuth from '../../uiview/Auth';

const Login = () => {
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
  const {userData : bacakendResponse = {}} = useSelector(state => state.authReducer);
  const {loading, error, response} = bacakendResponse;
    console.log('dwdqw', bacakendResponse)
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const clearAuthData = () => {
    setAlertVisible(false);
    setAlertContent(null);
  };

  useEffect(() => {
    if (error) {
      setAlertVisible(true);
      setAlertContent(error?.error);
    }
  }, [error]);

  useEffect(() => {
    if (response) {
      navigate(Routes.POSTLOGIN);
    }
  }, [response]);

  useEffect(() => {
    // clean up
    setAlertVisible(false)
    return () => {
      clearAuthData();
    };
  }, []);

  const onPress = () => {
    Keyboard.dismiss();
    dispatch(Actions.signInRequest());
    const {username , password} = userData;
    loginUser({username, password}, dispatch, t);
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

  const getusername = (username?: string) => {
    setUserData({...userData, username: username});
  };

  const getPassword = (password?: string) => {
    setUserData({...userData, password: password});
  };

  return (
    <Container style={styles.container}>
      <Container style={styles.registrationForm}>
        <Text style={styles.text}>{t('prelogin.LoginTitle')}</Text>
        <UserAuth
          alertContent={alertContent}
          alertVisible={alertVisible}
          setAlertVisible={setAlertVisible}
          errors={errors}
          control={control}
          getusername={getusername}
          getPassword={getPassword}
        />
      </Container>
      <Button
        loading={loading}
        disabled={!isValid}
        label={t('prelogin.login')}
        style={styles.button}
        onPress={onPress}
      />
    </Container>
  );
};

export default Login;

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
