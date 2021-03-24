import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';

import Payment from './src/screens/Payment/paymentIndex';
import HomeScreen from './src/screens/Home/homeIndex';
import Login from './src/screens/Login/loginIndex';
import 'react-native-gesture-handler';
import Router from './src/navigation/router';

export default function App() {
  return(
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      {/* <Payment/> */}
      {/* <HomeScreen/> */}
      {/* <Login/> */}
      <Router/>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})

