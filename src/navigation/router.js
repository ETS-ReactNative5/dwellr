import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Payment from '../screens/Payment/paymentIndex'

const Stack = createStackNavigator();


const Router = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Payment Screen"} component={"Payment"}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;