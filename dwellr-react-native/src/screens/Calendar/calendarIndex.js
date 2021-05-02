import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './calendarStyles';
import CustomButton from '../../Components/Button/buttonIndex';
//copy line below for navigation
import {useNavigation} from '@react-navigation/native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const CalendarScreen = (props) => {
    //copy line below for navigation
    const navigation = useNavigation();

    return (
        <View>
            <CalendarList
            markedDates={{
                '2021-05-01': {selected: true, marked: true, selectedColor: '#47c9ba'},
                '2021-06-01': {selected: true, marked: true, selectedColor: '#47c9ba'},
                '2021-07-01': {selected: true, marked: true, selectedColor: '#47c9ba'},
                '2021-08-01': {selected: true, marked: true, selectedColor: '#47c9ba'},
                '2021-09-01': {selected: true, marked: true, selectedColor: '#47c9ba'},
                '2021-10-01': {selected: true, marked: true, selectedColor: '#47c9ba'},
                '2021-11-01': {selected: true, marked: true, selectedColor: '#47c9ba'},
                '2021-12-01': {selected: true, marked: true, selectedColor: '#47c9ba'},
                '2022-01-01': {selected: true, marked: true, selectedColor: '#47c9ba'},
                '2022-02-01': {selected: true, marked: true, selectedColor: '#47c9ba'},
                '2022-03-01': {selected: true, marked: true, selectedColor: '#47c9ba'},
                '2022-04-01': {selected: true, marked: true, selectedColor: '#47c9ba'},
                '2021-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                '2021-06-27': {marked: true, dotColor: 'red', activeOpacity: 0},
              }}
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={50}
            // Enable or disable scrolling of calendar list
            scrollEnabled={true}
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={true}
            />
        </View>
    );
};

export default CalendarScreen;