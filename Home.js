import {
  Icon,
  Image,
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
  tingMong: {
    position: 'absolute',
    top: 180,
    left: -45,
  },
  health: {
    position: 'absolute',
    top: 700,
    left: 0,
  },
  challenges: {
    position: 'absolute',
    top: 700,
    left: 300,
  },
  level: {
    position: 'absolute',
    top: 700,
    left: 100,
  },
  backgroundImage: {
    position: 'absolute',
    left: -100,
  },
});
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, temperature: '0', points: 10};
  }

  render() {
    return (
      <SafeAreaView styles={styles.container}>
        <View>
          <Image
            source={require('./images/background.png')}
            style={styles.backgroundImage}
          />
          <Image
            source={require('./images/ting-mong.png')}
            style={styles.tingMong}
          />
          <Image
            source={require('./images/button-health.png')}
            style={styles.health}
          />
          <Image
            source={require('./images/button-challenges.png')}
            style={styles.challenges}
          />
          <Image
            source={require('./images/button-level.png')}
            style={styles.level}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default Home;
