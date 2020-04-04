import * as React from 'react';

import HomeScreen from './Home';
import InfoScreen from './Info';
import LoginScreen from './Login';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from './Profile';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  // onComponentDidMount() {
  //   PushNotificationIOS.presentLocalNotification({alertBody: 'hello'});
  // }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#9000FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: 'Cocovid'}}
          />
          <Stack.Screen
            name="Info"
            component={InfoScreen}
            options={{title: 'Terms & Conditions'}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{title: 'Your Profile'}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Notifications'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
