import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import CustomButton from '../../Components/Button/buttonIndex';
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './loginStyles'
import {useNavigation} from '@react-navigation/native'


const Login = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>dwellr
      <Entypo name={"home"} size={15}/>
      </Text>

      
      <CustomButton  onPress= {() => navigation.navigate('Home')} title='Login'/>

      <CustomButton onPress= {() => console.warn('Register Clicked')} title='Register'/>


      <StatusBar style="auto" />

    </View>
  );
}

export default Login;


