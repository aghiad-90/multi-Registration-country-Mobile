import React, {useEffect, useState} from 'react';
import {BackHandler, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getValidUserName} from '../../../core/utils';
import {Container, Text, Header} from '../../../core/components';
import {useTranslation} from '../../../core/hooks';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import * as Routes from '../../../features/appNavigator/routes';
import {Alert} from '../../../core/components';
import * as Actions from '../../prelogin/store/actions'

const Dashboard = () => {
  const {userData = {}} = useSelector(state => state.authReducer);
  const {response = {}} = userData ?? {};
  const {t} = useTranslation();
  const {navigate} = useNavigation();
  const [alertVisible, setAlertVisible] = useState(false);
  const dispatch =  useDispatch();
  const {user} = response ?? {};
  const { email = ''} = user ?? {}
  const navigation = useNavigation()

  console.log('DADASDSADDA', response)
 
   useEffect(() => {
     setAlertVisible(false)
   }, [])

   React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if(!response) return
        // Prevent default behavior of leaving the screen
        e.preventDefault();
      }),
    [navigation, response]
  );


  const handleSignOut = () => {
    dispatch(Actions.clearSignInRequest()); 
    auth()
      .signOut()
      .then(() => navigate(Routes.ROUTE_LOGIN_SCREEN));
  };

  const showModal = () => {
     setAlertVisible(true)
  }

  return (
    <>
      <Header onPressSignOut={showModal} />
      <Container style={styles.container}>
        <Text>{t('postlogin.welcome')}</Text>
        <Text testID = "userName">{getValidUserName(email)}</Text>
      </Container>
      <Alert
        visible={alertVisible}
        setVisible={setAlertVisible}
        alertContent={t('postlogin.signout')}
        primaryAction={handleSignOut}
        dissmasable
      />
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    margin: 24,
    flex: 1,
  },
});
