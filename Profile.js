import {
  Button,
  CheckBox,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RadioGroup, {Radio} from 'react-native-radio-input';
import {
  faCheckSquare,
  faFemale,
  faMale,
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Input} from 'react-native-elements';
import React from 'react';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioButton: 'value1',
    };
  }
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
            <Text>Age: </Text>
            <View>
              <RadioGroup>
                <Radio iconName={'lens'} label={'18-30'} value={'A'} />
                <Radio iconName={'lens'} label={'31-45'} value={'B'} />
                <Radio iconName={'lens'} label={'46-60'} value={1} />
                <Radio label={'60+'} value={'Yes'} />
              </RadioGroup>
            </View>

            <Text>Gender</Text>
            <View style={styles.genderContainer}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,0.2)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 100,
                  height: 100,
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  margin: 10,
                }}>
                <FontAwesomeIcon
                  icon={faMale}
                  style={{color: 'blue', padding: 30}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,0.2)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 100,
                  height: 100,
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  margin: 10,
                }}>
                <FontAwesomeIcon
                  icon={faFemale}
                  style={{color: 'blue', padding: 30}}
                />
              </TouchableOpacity>
            </View>
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
  genderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 160,
    backgroundColor: '#000',
  },
});
