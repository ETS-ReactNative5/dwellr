import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/Components/Button/buttonIndex';
import Login from './Login';
import Entypo from 'react-native-vector-icons/Entypo'

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>dwellr
      <Entypo name={"home"} size={15}/>
      </Text>

      
      <CustomButton  onPress= {() => console.warn('Login Clicked')} title='Login'/>

      <CustomButton onPress= {() => console.warn('Register Clicked')} title='Register'/>

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
