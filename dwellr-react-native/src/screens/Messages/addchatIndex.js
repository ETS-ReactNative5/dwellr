import React, { useState, useLayoutEffect }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native'
import CustomButton from '../../Components/Button/buttonIndex';
import AntDesign from 'react-native-vector-icons/AntDesign';



const AddChat = (props) => {
    const navigation = useNavigation();

    const [ input, setInput ] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity style={{marginLeft:10}} onPress={navigation.goBack}>
                    <AntDesign name="left" size={24} color="white"/>
                </TouchableOpacity>
            ),
        })
    }, []);

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input
        }).then(() => {
            navigation.goBack();
        })
        .catch((error) => alert(error));
    };

    return(
        <View style={styles.container}>
            <Input
                placeholder= "Enter a chat name" 
                value={input} 
                onChangeText = {(text) => setInput(text)}
                leftIcon = {
                    <Entypo name="chat" size={24} color="black"/>
                }
            />

            <Button onPress={createChat} title="Create New Chat"/>
        </View>
    )
}

export default AddChat;

const styles = StyleSheet.create ({
    container : {
        backgroundColor: 'white',
        height: "100%",
        padding: 30,
    },
})