import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  let granted = false;
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    granted = true;
  }

  return granted;
}

export async function registerForPushNotifications() {
  // await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log('Push notification token:', token);
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
}