import * as React from 'react';

import HomeScreen from './Home';
import InfoScreen from './Info';
import LoginScreen from './Login';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from './Profile';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
