import React, { useLayoutEffect } from 'react'; 
import {StyleSheet, View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';


const Chat = (props) => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity style={{marginLeft:10}} onPress={navigation.goBack}>
                    <AntDesign name="left" size={24} color="white"/>
                </TouchableOpacity>
            ),
        })
    }, []);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
            <StatusBar style="light"/>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style = {styles.container}
                keyboardVerticalOffset={90}
            >
                <TouchableWithoutFeedback>
                <>
                    <ScrollView>
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput placeholder="Testing Chat" style={styles.textInput}/>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Ionicons name="send" size={24} color="#47c9ba"/>
                        </TouchableOpacity>
                    </View>
                </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Chat;

const styles = StyleSheet.create ({
    container : {
        flex: 1,
    },

    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15
    },

    textInput: {
        bottom: 0,
        height: 40,
        flex: 1, 
        marginRight: 15,
        borderColor: "transparent",
        backgroundColor: "#ECECEC",
        padding: 10,
        color: "grey",
        borderRadius: 30,
    },
})