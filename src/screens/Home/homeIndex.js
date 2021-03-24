import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './homeStyles';
import CustomButton from '../../Components/Button/buttonIndex';
//copy line below for navigation
import {useNavigation} from '@react-navigation/native'


const HomeScreen = (props) => {
    //copy line below for navigation
    const navigation = useNavigation();

    return (
        <View>
            {/* Accounnt/Profile */}

            <ImageBackground 
                source={require('../../../assets/images/cat.jpg')} 
                style={styles.image}>
                <Text style= {styles.title}>Welcome Sally</Text>

                <CustomButton  onPress= {() => navigation.navigate('Payment')} title='Make Payment'/>
{/* 
                <Pressable 
                    style={styles.button}
                    onPress= {() => console.warn('Button Clicked')}
                >
                    <Text style={styles.buttonText}>Make Payment</Text>
                </Pressable> */}
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;