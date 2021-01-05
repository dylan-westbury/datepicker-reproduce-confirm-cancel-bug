/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const App: () => React$Node = () => {
  const [ date, setDate ] = useState(new Date());
  const [ show, setShow ] = useState(false);

  const hideDatePicker = () => {
    setShow(false);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/*<Header />*/}
          <View style={{flexDirection: "row", marginTop: 50 }}>
            <View style={{flex: 1 }}>
              <TouchableOpacity onPress={ () => showDatepicker() }>
                <Text style={{fontSize: 48, fontWeight: 'bold', textAlign: 'center'}}>
                  Select Date
                  {/*{ value && moment(date).format('DD-MM-YYYY') }*/}
                </Text>
              </TouchableOpacity>
            </View>

            <DateTimePickerModal
              isVisible={ show }
              mode="date"
              onConfirm={ val => {
                // onConfirm(val);
                hideDatePicker();
              } }
              headerTextIOS={ 'Select Date' }
              onCancel={ hideDatePicker }
              date={ date }
              // maximumDate={maximumDate}
              // minimumDate={minimumDate}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
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

export default App;
