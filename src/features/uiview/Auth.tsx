import React, {useEffect, useState} from 'react';
import {TextInput, Alert} from '../../core/components';
import {_storeData, _storeDataObject} from '../../core/network/asyncStorage';
import {useTranslation} from '../../../src/core/hooks';

const UserAuth = (props: any) => {
  const {
    alertVisible,
    setAlertVisible,
    alertContent,
    control,
    errors,
    getusername,
    getPassword,
  } = props;
  const [userName, setUserName] = useState('');
  const [password, setPassowrd] = useState('');

  const {t} = useTranslation();

  const handleEmailChange = (val: string) => {
    setUserName(val);
    getusername(val);
  };

  const handlePasswordChange = (val: string) => {
    setPassowrd(val);
    getPassword(val);
  };

  useEffect(() => {
    return () => {
      setAlertVisible(false);
      setUserName('');
      setPassowrd('');
    };
  }, []);

  return (
    <>
      <TextInput
        placeholder={t('prelogin.userName')}
        value={userName}
        name={'userName'}
        testID="usernameTextInput"
        control={control}
        error={errors['userName']}
        onChangeText={handleEmailChange}
        style={{marginBottom: 24}}
      />
      <TextInput
        placeholder={t('prelogin.password')}
        value={password}
        name={'password'}
        control={control}
        testID="passwordTextInput"
        error={errors['password']}
        onChangeText={handlePasswordChange}
        showSecureText
      />
      {alertVisible && (
        <Alert
          visible={alertVisible}
          setVisible={setAlertVisible}
          alertContent={alertContent}
        />
      )}
    </>
  );
};

export default UserAuth;
