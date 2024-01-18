import auth from '@react-native-firebase/auth';
import { TFunction } from 'i18next';
import * as Actions from '../../features/prelogin/store/actions';

export const registerUser = (userData: any, dispatch: any, t : TFunction) => {
  const {username, password} = userData;
  console.log('registerUser', userData);
  const email = username + '@gmail.com';
  // since we are using Firebase as a backend service
  // we will get username and append it to email format
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      dispatch(
        Actions.signupRequestSuccess({
          data: t('prelogin.signupSuccess'),
        }),
      );
    })
    .catch(error => {
      console.log('err', error)
      if (error.code === 'auth/email-already-in-use') {
        dispatch(
          Actions.signupRequestError({
            error: t('prelogin.userNameused'),
          }),
        );
      } else if (error.code === 'auth/invalid-email') {
        dispatch(
          Actions.signupRequestError({
            error: 'That email address is invalid!',
          }),
        );
      } else {
        dispatch(
          Actions.signupRequestError({
            error: t('prelogin.checkusername'),
          }),
        );
      }
    });
};


export const loginUser = (userData: any, dispatch: any, t : TFunction) => {
  const {username, password} = userData;
  const email = username + '@gmail.com';
  // since we are using Firebase as a backend service
  // we will get username and append it to email format
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(
        Actions.signInRequestSuccess(response),
      );
    })
    .catch(error => {
      console.log('error', error)
      if (error.code === 'auth/email-already-in-use') {
        dispatch(
          Actions.signInRequestError({
            error: t('prelogin.userNameused'),
          }),
        );
      } else if (error.code === 'auth/invalid-email') {
        dispatch(
          Actions.signInRequestError({
            error: 'That email address is invalid!',
          }),
        );
      } else {
        dispatch(
          Actions.signInRequestError({
            error: t('prelogin.checkusername'),
          }),
        );
      }
    });
};
