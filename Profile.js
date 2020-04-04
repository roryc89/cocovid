import {Button, Text, View} from 'react-native';

import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Complete your profile!</Text>
      <Button
        title="take me Home"
        onPress={() => navigation.navigate('Home', {name: 'Home'})}
      />
    </View>
  );
};

export default Profile;
