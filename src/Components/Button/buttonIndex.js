import React from 'react'; 
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './buttonStyles'

const CustomButton = ({onPress, title}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{title} </Text>
            </TouchableOpacity>
        </View>

    );
};

export default CustomButton; 
