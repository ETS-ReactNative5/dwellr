import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import CustomButton from '../../Components/Button/buttonIndex';
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './loginStyles'

const Login = (props) => {
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

export default Login;


