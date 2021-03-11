import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';
import CustomButton from './Components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>dwellr</Text>

      <CustomButton> 
        <Text> Login </Text>
      </CustomButton>


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
});
