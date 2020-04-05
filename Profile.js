import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Divider, Input} from 'react-native-elements';

import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <Text>Complete your profile!</Text>
            <Text>Your inital score: 10</Text>
            <Divider />
            <Input label="Name" onChangeText={() => {}} />
            <Input label="Age" onChangeText={() => {}} />
            <Input label="Address" onChangeText={() => {}} />

            <Button
              title="Save"
              onPress={() =>
                this.props.navigation.navigate('Home', {name: 'Home'})
              }
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#203878',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundImage: url('images/radial_bg.png')
    // backgroundRepeat: 'no-repeat',
    /* Safari 4-5, Chrome 1-9 */
    /* Can't specify a percentage size? Laaaaaame. */
    // background:
    //   '-webkit-gradient(radial, center center, 0, center center, 460, from(#1a82f7), to(#2F2727))',
  },
});
