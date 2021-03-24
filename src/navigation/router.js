import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Payment from '../screens/Payment/paymentIndex';
import HomeScreen from '../screens/Home/homeIndex';
import HomeTabNavigator from './HomeTabNavigator';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';


const Stack = createStackNavigator();


const Router = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator style={styles.container}>
                <Stack.Screen 
                    name={"Login "} 
                    component={HomeTabNavigator}
                    options = {{headerShown: false}}
                />
                <Stack.Screen 
                    name={"Payment"} 
                    component={Payment}
                    options={{title: "Make a Payment" }}
                /> 
                <Stack.Screen 
                    name={"Homescreen"} 
                    component={HomeScreen}
                    options={{title: "Home"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})

export default Router;

