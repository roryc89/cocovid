import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {
  faCheckSquare,
  faFemale,
  faMale,
} from '@fortawesome/free-solid-svg-icons';

import {Button} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGender: null,
    };
  }

  getChecked(value) {
    console.log(value);
  }

  setGender(gender) {
    this.setState({selectedGender: gender});
  }

  render() {
    const that = this;
    const radio_props = [
      {label: '18-30', value: 18},
      {label: '31-45', value: 31},
      {label: '45-60', value: 45},
      {label: '60+', value: 60},
    ];

    console.log('that.state', that.state);

    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.ageContainer}>
              <Text style={styles.ageTitle}>អាយុ: </Text>
              <View>
                <RadioForm
                  selectedLabelColor={'white'}
                  labelColor={'white'}
                  buttonColor={'white'}
                  selectedButtonColor={'white'}
                  radio_props={radio_props}
                  initial={0}
                  onPress={value => {
                    this.setState({value: value});
                  }}
                />
              </View>
            </View>
            <View style={styles.genderContainer}>
              <Text style={styles.genderText}>ភេទ:</Text>
              <View style={styles.genderButtons}>
                <TouchableOpacity
                  onPress={() => this.setGender('male')}
                  style={{
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    margin: 15,
                    backgroundColor:
                      that.state.selectedGender === 'male' ? '#fff' : '#aaa',
                  }}>
                  <FontAwesomeIcon
                    icon={faMale}
                    style={{color: '#e85143', padding: 30}}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.setGender('female')}
                  style={{
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                    height: 100,
                    backgroundColor: '#fff',
                    borderRadius: 50,
                    margin: 15,
                    backgroundColor:
                      that.state.selectedGender === 'female' ? '#fff' : '#aaa',
                  }}>
                  <FontAwesomeIcon
                    icon={faFemale}
                    style={{
                      color: '#e85143',
                      padding: 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.map}>
              <Text style={styles.mapTitle}>អាសយដ្ឋាន:</Text>
              <Image
                style={styles.mapImage}
                source={require('./images/map.png')}
              />
            </View>
            <Button
              style={styles.button}
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
    backgroundColor: '#e85143',
    alignItems: 'center',
  },

  genderContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 10,
  },
  genderButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  genderText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 160,
    backgroundColor: '#000',
  },
  ageContainer: {
    flex: 1,
    justifyContent: 'flex-end',

    margin: 10,
  },
  ageTitle: {
    color: 'white',
    margin: 8,
    fontSize: 26,
    fontWeight: 'bold',
  },

  mapTitle: {
    color: 'white',
    margin: 8,
    fontSize: 26,
    fontWeight: 'bold',
  },
  mapImage: {
    width: 300,
    height: 200,
  },
  button: {
    marginTop: 10,
    color: 'black',
    backgroundColor: 'white',
  },
});
