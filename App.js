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
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'ទីងមោង',
              headerStyle: {
                backgroundColor: '#203878',
                shadowColor: 'transparent',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 40,
              },
            }}
          />
          <Stack.Screen
            name="Info"
            component={InfoScreen}
            options={{
              title: 'តើទីងមោងជាអ្វី?',
              headerStyle: {
                backgroundColor: '#203878',
                shadowColor: 'transparent',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 40,
              },
            }}
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
