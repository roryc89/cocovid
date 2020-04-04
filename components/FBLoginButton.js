import {LoginButton} from 'react-native-fbsdk';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const FBLoginButton = ({navigation}) => {
  return (
    <View>
      <LoginButton
        publishPermissions={['email']}
        onLoginFinished={(error, result) => {
          console.log('error', error);
          console.log('result', result);
          if (error) {
            alert('Login failed with error: ' + error.message);
          } else if (result.isCancelled) {
            alert('Login was cancelled');
          } else {
            alert(
              'Login was successful with permissions: ' +
                result.grantedPermissions,
            );
            navigation.navigate('Info', {name: 'Info'});
          }
        }}
        onLogoutFinished={() => alert('User logged out')}
      />
    </View>
  );
};

module.exports = FBLoginButton;
