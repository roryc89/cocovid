import {Button, Text, View} from 'react-native';

import React from 'react';

const Info = ({navigation}) => {
  return (
    <View>
      <Text>Information about covid </Text>
      <Button
        title="Accept"
        onPress={() => navigation.navigate('Profile', {name: 'Profile'})}
      />
    </View>
  );
};

export default Info;
