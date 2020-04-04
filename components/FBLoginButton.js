import {AccessToken, LoginButton} from 'react-native-fbsdk';
import {AsyncStorage, View} from 'react-native';

import React from 'react';

class FBLoginButton extends React.Component {
  componentDidMount() {
    if (AsyncStorage.getItem('userToken')) {
      this.props.navigation.navigate('Home', {name: 'Home'});
    }
  }
  render() {
    return (
      <View>
        <LoginButton
          publishPermissions={['email']}
          onLoginFinished={async (error, result) => {
            if (error) {
              alert('Login failed with error: ' + error.message);
            } else if (result.isCancelled) {
              alert('Login was cancelled');
            } else if (result.grantedPermissions && !result.isCancelled) {
              const data = await AccessToken.getCurrentAccessToken();

              if (data) {
                await AsyncStorage.setItem('authToken', data.accessToken);
                alert(
                  'Login was successful with permissions: ' +
                    result.grantedPermissions,
                );
                this.props.navigation.navigate('Info', {name: 'Info'});
              }
            }
          }}
          onLogoutFinished={() => alert('User logged out')}
        />
      </View>
    );
  }
}

module.exports = FBLoginButton;
