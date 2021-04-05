import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login/loginIndex';
import HomeScreen from '../screens/Home/homeIndex';
import Messages from '../screens/Messages/messagesIndex';
import Profile from '../screens/Profile/profileIndex';
import AddChat from '../screens/Messages/addchatIndex';
import Payment from '../screens/Payment/paymentIndex';
import CalendarScreen from '../screens/Calendar/calendarIndex';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { HeaderTitle } from '@react-navigation/stack';


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
                ),
            }}
            /> */}

            <Tab.Screen 
            name={"Home"} 
            component= {HomeScreen}
            options= {{
                tabBarIcon: ({color}) => (
                    <Entypo name="home" size={25} color={color}/>
                ),
            }}
            />

            <Tab.Screen 
            name={"Payment"} 
            component= {Payment}
            options= {{
                tabBarIcon: ({color}) => (
                    <Entypo name="credit" size={25} color={color}/>
                ),
            }}
            />

            <Tab.Screen 
            name={"Calendar"} 
            component= {CalendarScreen}
            options= {{
                tabBarIcon: ({color}) => (
                    <EvilIcons name="calendar" size={30} color={color}/>
                )
            }}
            /> 

            <Tab.Screen 
            name={"Messages"} 
            component= {Messages}
            options= {{
                tabBarIcon: ({color}) => (
                    <Feather name="message-square" size={23} color={color}/>
                )
            }}
            />

            {/* <Tab.Screen 
            name={"Add Chat"} 
            component= {AddChat}
            options= {{
                tabBarIcon: ({color}) => (
                    <Feather name="message-square" size={23} color={color}/>
                )
            }}
            /> */}

            <Tab.Screen 
            name={"Profile"} 
            component= {Profile}
            options= {{
                tabBarIcon: ({color}) => (
                    <EvilIcons name="user" size={25} color={color}/>
                )
            }}
            />

            
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