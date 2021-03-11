import React from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, title}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{title} </Text>
        </TouchableOpacity>
    );
};

const styles= StyleSheet.create({
    button: {
        backgroundColor: 'black', 
        paddingVertical: 20, 
        paddingHorizontal: 75,
        borderRadius: 40,
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