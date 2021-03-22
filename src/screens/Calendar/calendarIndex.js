import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './calendarStyles';
import CustomButton from '../../Components/Button/buttonIndex';
//copy line below for navigation
import {useNavigation} from '@react-navigation/native'


const Calendar = (props) => {
    //copy line below for navigation
    const navigation = useNavigation();

    return (
        <View>
            <Text>Calendar Page</Text>
        </View>
    );
};

export default Calendar;