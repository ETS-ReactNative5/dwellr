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
    alignItems: 'center',
    justifyContent: 'center',
  },
})




// export default function App() {
//   return (
//      <View style={styles.container}>

//        <Text style={styles.title}>dwellr
//        <Entypo name={"home"} size={15}/>
//        </Text>

      
//        <CustomButton  onPress= {() => console.warn('Login Clicked')} title='Login'/>

//        <CustomButton onPress= {() => console.warn('Register Clicked')} title='Register'/>

//        <StatusBar style="auto" />
//        {/* <HomeScreen/> */}
//        {/* <Payment/> */}

//      </View>

//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   title: {
//     marginTop: 0,
//     width: '100%', 
//     textAlign: 'center',
//     fontSize: 40, 
//     fontWeight: '600',
//   },

  
// })
