import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';

import CustomButton from './Components/CustomButton';
import Login from './Login';


export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>dwellr</Text>

      
      <CustomButton  title='Login'/>

      <CustomButton title='Register'/>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginTop: 0,
    width: '100%', 
    textAlign: 'center',
    fontSize: 40, 
    fontWeight: '600',
  },

  
});
