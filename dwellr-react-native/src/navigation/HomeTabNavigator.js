import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import Login from '../screens/Login/loginIndex';
import HomeScreen from '../screens/Home/homeIndex';
import Payment from '../screens/Payment/paymentIndex';
import CalendarScreen from '../screens/Calendar/calendarIndex';
import Profile from '../screens/Profile/profileIndex';

//icons
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';



const Tab = createBottomTabNavigator()

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator tabBarOptions= {{
            activeTintColor: '#47c9ba',

        }}>
            {/* <Tab.Screen 
            name={"Login"} 
            component= {Login}
            options= {{
                tabBarIcon: ({color}) => (
                    <Feather name="user-plus" size={25} color={color}/>
                )
            }}
            /> */}

            <Tab.Screen 
            name={"Home"} 
            component= {HomeScreen}
            options= {{
                tabBarIcon: ({color}) => (
                    <Entypo name="home" size={25} color={color}/>
                )
            }}
            />

            <Tab.Screen 
            name={"Payment"} 
            component= {Payment}
            options= {{
                tabBarIcon: ({color}) => (
                    <Entypo name="credit" size={25} color={color}/>
                )
            }}
            />

            {/* <Tab.Screen 
            name={"Messages"} 
            component= {Messaging}
            options= {{
                tabBarIcon: ({color}) => (
                    <Feather name="message-square" size={25} color={color}/>
                )
            }}
            /> */}

            {/* <Tab.Screen 
            name={"Profile"} 
            component= {Profile}
            options= {{
                tabBarIcon: ({color}) => (
                    <EvilIcons name="user" size={25} color={color}/>
                )
            }}
            /> */}

            { <Tab.Screen 
            name={"Calendar"} 
            component= {CalendarScreen}
            options= {{
                tabBarIcon: ({color}) => (
                    <EvilIcons name="calendar" size={25} color={color}/>
                )
            }}
            /> }

            { <Tab.Screen 
            name={"Profile"} 
            component= {Profile}
            options= {{
                tabBarIcon: ({color}) => (
                    <Feather name="user" size={25} color={color}/>
                )
            }}
            /> }
            {/* <Tab.Screen 
            name={"Forum"} 
            component= {Forum}
            options= {{
                tabBarIcon: ({color}) => (
                    <EvilIcons name="calendar" size={25} color={color}/>
                )
            }}
            /> */}
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;