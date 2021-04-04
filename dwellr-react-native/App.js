import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import Router from './src/navigation/router';

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import { withAuthenticator } from 'aws-amplify-react-native'



const App = () => {
  return(
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Router/>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


export default withAuthenticator(App)
//export default App
