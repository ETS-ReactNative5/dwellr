import React from 'react';
import {NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Payment from '../screens/Payment/paymentIndex';
import HomeScreen from '../screens/Home/homeIndex';
import HomeTabNavigator from './HomeTabNavigator';
import { ProgressViewIOSComponent, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Login';

    switch (routeName) {
        case 'Login':
            return 'Login';
        case 'Home':
            return 'Home';
        case 'Payment':
            return 'Make Payment';
        case 'Calendar':
            return 'My Calendar';
        case 'Messages':
            return 'Chat Room';
    }
}


const Stack = createStackNavigator();


const Router = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator style={styles.container}>
                <Stack.Screen 
                    name={"Login"} 
                    component={HomeTabNavigator}
                    // options = {{headerShown: true}}
                    options={({ route }) => ({
                        headerTitle: getHeaderTitle(route),
                        headerRight: ()=> (
                            <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: 50
                            }}
                            >
                                <TouchableOpacity>
                                    <EvilIcons name="user" size={38} color="#47c9ba"/>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                    
                />
                {/* <Stack.Screen 
                    name={"Payment"} 
                    component={Payment}
                    options={{title: "Make a Payment" }}
                /> 
                <Stack.Screen 
                    name={"Homescreen"} 
                    component={HomeScreen}
                    options={{title: "Home"}}
                /> */}
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

