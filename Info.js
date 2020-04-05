import {
  Button,
  CheckBox,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

const Info = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.textContainer}>
            <Text style={styles.khmerText}>
              ទីងមោងគឺជាផ្នែកបុរាណមួយនៃទំនៀមទម្លាប់របស់ខ្មែរ។{' '}
            </Text>
            <Text style={styles.khmerText}>
              ទីងមោង​ត្រូវបានគេគិតថា គឺជារូប
              ​ដើម្បី​បញ្ចៀស​​នូវ​ឧបទ្រព​ចង្រៃ​គ្រប់​ប្រភេទនិង
              រារាំងវិញ្ញាណអាក្រក់។
            </Text>
            <Text style={styles.khmerText}>
              ឥឡូវយើងស្ថិតក្នុងស្ថានភាពមួយដែលទាមទារឱ្យយើង
            </Text>
            <Text style={styles.khmerText}>រួបរួមគ្នាប្រុងប្រយ័ត្ន។</Text>
            <Text style={styles.khmerText}>
              គោលដៅនៃកម្មវិធីនេះគឺដើម្បីចែករំលែកព័ត៌មានអំពីសុវត្ថិភាព
              និងបង្កើនការយល់ដឹងជាសកលទាក់ទងនឹងការប្រយុទ្ធប្រឆាំងនឹងជម្ងឺ
              Covid-19 ។
            </Text>
            <Text style={styles.khmerText}>
              ប៉ុន្តែទីងមោងត្រូវបានរចនាឡើងជាហ្គេមដែលអ្នកនឹងទទួលបានពិន្ទុ
            </Text>
            <Text style={styles.khmerText}>
              ដើម្បីបង្កើនកម្រិតនៃការការពារ ទីងមោង របស់អ្នក។
            </Text>
            <Text style={styles.khmerText}>
              ជួយខ្លួនអ្នកដោយការការពារអ្នកដទៃ។
            </Text>
            <Text style={styles.khmerText}> អរគុណ </Text>
            <View style={styles.submitButton}>
              <Button
                color={'white'}
                title="ទទួលយកល័ក្ខខ័ណ្ឌ"
                onPress={() =>
                  navigation.navigate('Profile', {name: 'Profile'})
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#203878',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  textContainer: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'left',
  },
  khmerText: {
    color: '#fff',
    fontSize: 18,
    margin: 6,
  },
  submitButton: {
    marginTop: 30,
    marginLeft: 20,
    backgroundColor: '#0066A2',
    borderColor: '#0066A2',
    height: 50,
    width: 150,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Info;
