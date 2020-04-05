import * as React from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';
import {faCheckSquare, faUser} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import HomeScreen from './Home';
import InfoScreen from './Info';
import LoginScreen from './Login';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from './Profile';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {createStackNavigator} from '@react-navigation/stack';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(fab, faCheckSquare, faUser);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 120,
    color: 'white',
    marginRight: 20,
    fontSize: 20,
  },
  inputWrapper: {
    height: 50,
    width: '80%',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#FAF9F9',
    marginBottom: 10,
    padding: 10,
  },
});

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    console.log('Stak', Stack.Navigator);
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'ទីងមោង',
              headerStyle: {
                backgroundColor: '#e85143',
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
                backgroundColor: '#e85143',
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
            options={{
              title: 'ប្រវត្តិរូប',
              headerStyle: {
                backgroundColor: '#e85143',
                shadowColor: 'transparent',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 30,
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              parent: this,
              title: 'Home',
              headerRight: () => (
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() =>
                    // this.parent.props.navigateToScreen('Profile')
                    navigation.navigate('Profile', {
                      name: 'Profile',
                    })
                  }>
                  <FontAwesomeIcon icon={faUser} styles={{color: 'white'}} />
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#e85143',
                shadowColor: 'transparent',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 30,
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
