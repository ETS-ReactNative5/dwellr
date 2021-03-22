import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Payment from '../screens/Payment/paymentIndex'
import HomeScreen from '../screens/Home/homeIndex'
import HomeTabNavigator from './HomeTabNavigator'
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();


const Router = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={"Login  fehrifuheruif erfheiufn jkjhnjkhnuheiru  "} 
                    component={HomeTabNavigator}
                    screenOptions = {{headerShown: false}}
                />
                {/* <Stack.Screen 
                    name={"Payment"} 
                    component={Payment}
                    options={{title: "Payment have to make this long so it shows up!!"}}
                /> */}
                {/* <Stack.Screen 
                    name={"Homescreen"} 
                    component={Payment}
                    options={{title: "Payment"}}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};


  


  export default Router;

