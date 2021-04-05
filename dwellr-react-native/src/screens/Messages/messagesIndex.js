import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import React, { useLayoutEffect } from 'react';
import ChatList from '../../Components/ChatList/chatlistIndex'
import {useNavigation} from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../Components/Button/buttonIndex'

const Messages = () => {
    const navigation = useNavigation();

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerStyle: {backgroundColor: "#86579e"},
    //         headerRight: ()=> (
    //             <View
    //             style={{
    //                 flexDirection: "row",
    //                 justifyContent: "space-between",
    //                 width: 80,
    //                 marginRight: 20,
    //             }}
    //             >
    //                 <TouchableOpacity>
    //                     <Entypo name="home" size={25} color={color}/>
    //                 </TouchableOpacity>
    //             </View>
    //         )
    //     });
    // },[]);

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <CustomButton  onPress= {() => navigation.navigate('Add Chat')} title='Add Chat'/>
                <CustomButton  onPress= {() => navigation.navigate('Test Chat')} title='Test Chat'/>
                <ChatList/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Messages;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
})