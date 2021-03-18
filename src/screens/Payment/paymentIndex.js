import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import CustomButton from '../../Components/Button/buttonIndex'
import styles from './paymentStyles'

const Payment = (props) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Make Payment</Text> 


            <Text style={styles.subtitle}>
                Amount Due: $1000 
                {"\n"}
                By: January 1, 2021
            </Text>


            <Text style={styles.subtitle2}> Pay with: </Text>


            <CustomButton  onPress= {() => console.warn('Paypal Clicked')} title='Paypal'/>
            <CustomButton onPress= {() => console.warn('Venmo Clicked')} title='Venmo'/>



        </View>
    );
};



export default Payment;
