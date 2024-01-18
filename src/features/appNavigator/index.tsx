import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Routes from './routes';
import WelcomeScreen from '../prelogin/screens/Welcome';
import Registration from '../prelogin/screens/Registration';
import Login from '../prelogin/screens/Login';
import Dashboard from '../postlogin/screens/Dashboard';

const Stack = createStackNavigator();

const PostLoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.ROUTE_DASHBOARD}>
      <Stack.Screen  options = {() => ({gestureEnabled : false})} name={Routes.ROUTE_DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Routes.ROUTE_WELCOME_SCREEN}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name={Routes.ROUTE_REGISTRATION_SCREEN}
          component={Registration}
        />
        <Stack.Screen name={Routes.ROUTE_LOGIN_SCREEN} component={Login} />
        <Stack.Screen
          name={Routes.POSTLOGIN}
          component={PostLoginStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
