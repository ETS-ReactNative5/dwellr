import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './homeStyles';
import CustomButton from '../../Components/Button/buttonIndex';
import {useNavigation} from '@react-navigation/native'
import API from '@aws-amplify/api';


const HomeScreen = (props) => {
    const navigation = useNavigation();

    const [greeting, setGreeting] = useState(null);

    async function fetchGreeting(){
        const apiData = await API.get('pythonapi', '/greeting')
        setGreeting(apiData.message)
    }

    useEffect(() => {
        fetchGreeting()
    }, [])

    return (
        <View >

            <ImageBackground 
                source={require('../../../assets/images/home.jpg')} 
                style={styles.image}>
                <Text style= {styles.title}>Welcome Home {greeting}</Text>
                <Text> </Text> 
                <TouchableOpacity
                    style={styles.button}
                    onPress= {() => navigation.navigate('Payment')} title='Make Payment'
                    >
                    <Text style={styles.buttonText}>MAKE PAYMENT</Text>
                </TouchableOpacity>
                {/* <CustomButton  onPress= {() => navigation.navigate('Payment')} title='Make Payment'/> */}
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;