import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './src/screens/Chat/welcome/welcome-screen'
import ChatCreateScreen from './src/screens/Chat/chat-create/chat-create-screen'
import ChatListScreen from './src/screens/Chat/chat-list/chat-list-screen'
import ChatRoomScreen from './src/screens/Chat/chat-room/chat-room-screen'

import 'react-native-gesture-handler';
import Router from './src/navigation/router';
import AppProvider from './src/app-context'

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import { withAuthenticator } from 'aws-amplify-react-native'

// const Stack = createStackNavigator();

// export const routes = {
//   Welcome: {
//     name: 'welcome',
//     title: 'Welcome',
//   },
//   ChatList: {
//     name: 'chat-list',
//     title: 'Chat List',
//   },
//   ChatRoom: {
//     name: 'chat-room',
//     title: 'Chat Room',
//   },
//   ChatCreat: {
//     name: 'chat-create',
//     title: 'New Channel',
//   },
// };


const App = () => {
  // const screenOptions = (title) => ({
  //   title,
  //   headerStyle: {
  //     backgroundColor: "#47c9ba",
  //   },
  //   headerTintColor: 'white',
  //   headerTitleStyle: {
  //     fontWeight: '700',
  //   },
  // });
  return(
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      {/* <Router/> */}
      {/* <NavigationContainer> */}
        <AppProvider>
          <Router/>
          {/* <Stack.Navigator>
             <Stack.Screen
              name={routes.Welcome.name}
              options={screenOptions(routes.Welcome.title)}
              component={WelcomeScreen}
            />
            <Stack.Screen
              name={routes.ChatList.name}
              options={screenOptions(routes.ChatList.title)}
              component={ChatListScreen}
            />
            <Stack.Screen
              name={routes.ChatRoom.name}
              options={screenOptions(routes.ChatRoom.title)}
              component={ChatRoomScreen}
            />
            <Stack.Screen
              name={routes.ChatCreat.name}
              options={screenOptions(routes.ChatCreat.title)}
              component={ChatCreateScreen}
            />
          </Stack.Navigator>
          <FlashMessage position="bottom" /> */}
        </AppProvider>
      {/* </NavigationContainer> */}
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


export default withAuthenticator(App)
//export default App
