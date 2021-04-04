import React from 'react';
import {View, Text, Pressable} from 'react-native';
import CustomButton from '../../Components/Button/buttonIndex'
import styles from './profileStyles'
import { Auth } from 'aws-amplify'

const Profile = (props) => {

    const logout = () => {
        Auth.signOut();
    } 

    return (
        <View style={styles.container}>
            <CustomButton  onPress= {logout} title='Sign Out'/>

        </View>

    );
};



export default Profile;
