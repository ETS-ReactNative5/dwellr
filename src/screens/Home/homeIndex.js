import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './homeStyles'
import CustomButton from '../../Components/Button/buttonIndex'

const HomeScreen = (props) => {
    return (
        <View>
            {/* Accounnt/Profile */}

            <ImageBackground 
                source={require('../../../assets/images/cat.jpg')} 
                style={styles.image}>
                <Text style= {styles.title}>Welcome Sally!!!</Text>

                <CustomButton  onPress= {() => console.warn('Payment Clicked')} title='Make Payment'/>

                <Pressable 
                    style={styles.button}
                    onPress= {() => console.warn('Button Clicked')}
                >
                    <Text style={styles.buttonText}>Make Payment</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;