import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './homeStyles';
import CustomButton from '../../Components/Button/buttonIndex';
//copy line below for navigation
import {useNavigation} from '@react-navigation/native'
import API from '@aws-amplify/api';


const HomeScreen = (props) => {
    //copy line below for navigation
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
        <View>
            {/* Accounnt/Profile */}

            <ImageBackground 
                source={require('../../../assets/images/cat.jpg')} 
                style={styles.image}>
                <Text style= {styles.title}>Welcome {greeting}</Text>

                <CustomButton  onPress= {() => navigation.navigate('Payment')} title='Make Payment'/>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;