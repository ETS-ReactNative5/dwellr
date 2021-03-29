import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import React, { useLayoutEffect } from 'react';
import ChatList from '../../Components/ChatList/chatlistIndex'
import {useNavigation} from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo';


const Messages = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {backgroundColor: "#86579e"},
            headerRight: ()=> (
                <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }}
                >
                    <TouchableOpacity>
                        <Entypo name="home" size={25} color={color}/>
                    </TouchableOpacity>
                </View>
            )
        });
    },[]);

    return (
        <SafeAreaView>
            <ScrollView>
                <ChatList/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Messages;