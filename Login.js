/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import FBLoginButton from './components/FBLoginButton';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View>
            <Image
              source={require('./images/logo-tim.png')}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>
                ការពារខ្លួនអ្នកនិង ក្រុមគ្រួសាររបស់អ្នក។
              </Text>

              <Text style={styles.mainText}>អ្នកនិងឈ្នះរង្វាន់</Text>
            </View>
            <View style={styles.facebookButton}>
              <FBLoginButton navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e85143',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {margin: 50},
  engine: {
    position: 'absolute',
    right: 0,
  },
  mainText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
    flexWrap: 'wrap',
  },
  textContainer: {
    marginBottom: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Login;
