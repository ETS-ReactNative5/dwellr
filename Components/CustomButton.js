import React from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, title}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{title} </Text>
            </TouchableOpacity>
        </View>

    );
};

const styles= StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    },

    button: {
        backgroundColor: 'black', 
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white', 
        fontSize: 18, 
        fontWeight: 'bold', 
        alignSelf:'center', 
        textTransform: 'uppercase', 


    },
});

export default CustomButton; 