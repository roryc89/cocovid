import {
  Icon,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import Modal from 'react-native-modal';
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
  washYourHands: {
    position: 'absolute',
    left: -50,
    top: -25,
  },
});
const Home = () => {
  const [step, setStep] = useState(2);
  console.log('step', step);

  setTimeout(() => setStep(step === 1 ? 2 : 1), 10000);

  return (
    <SafeAreaView styles={styles.container}>
      <View>
        {step === 1 ? (
          <>
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
          </>
        ) : (
          <Image
            source={require('./images/wash-your-hands.png')}
            style={styles.washYourHands}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
export default Home;
