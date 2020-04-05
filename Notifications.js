import {
  Alert,
  Icon,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import Modal from 'react-native-modal';
import React from 'react';
import {SafeAreaView} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    paddingLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 120,
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
class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, temperature: '0', points: 10};
  }

  onChangeText(text) {
    this.setState({temperature: text});
  }

  setModalVisible(visible) {
    this.setState({showModal: visible});
  }

  closeModal() {
    this.setState({showModal: false, points: this.state.points + 10});
    alert('+ 10 points');
  }

  componentDidMount() {
    Alert.alert(
      'Hello!',
      //body
      'You have not checked your tempeature today. Would you like to do it? (+10 points)',
      [
        {text: 'Yes', onPress: () => this.setModalVisible(true)},
        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <SafeAreaView styles={styles.container}>
        <View>
          <Modal
            isVisible={this.state.showModal}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 2,
                borderColor: 'gray',
                justifyContent: 'center',
                alignItems: 'center',
                height: '10%',
                fontSize: 12,
              }}>
              <Text>Please insert your temperature:</Text>
              <TextInput
                style={{
                  height: 40,
                  width: 60,
                  borderColor: 'gray',
                  borderWidth: 1,
                }}
                onChangeText={(text) => this.onChangeText(text)}
                value={this.state.temperature}
              />

              <TouchableHighlight
                onPress={() => {
                  this.closeModal();
                }}>
                <Text>OK</Text>
              </TouchableHighlight>
            </View>
          </Modal>
        </View>
        <View style={styles.inputWrapper}>
          <Text>Your Score: {this.state.points}</Text>
          <Text>Share it with Friends! </Text>
        </View>

        <View style={styles.inputWrapper}>
          <Text>Last Temperature recorded: {this.state.temperature}</Text>
        </View>

        <Text>Alerts:</Text>
        <View style={styles.inputWrapper}>
          <Text>Check your temperature! </Text>
        </View>
        <View style={styles.inputWrapper}>
          <Text>You have been in contact with 3 infected users </Text>
        </View>
        <View style={styles.inputWrapper}>
          <Text>Wash your hands! </Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default Notifications;
