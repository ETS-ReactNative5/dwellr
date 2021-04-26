import React, { useState } from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import CustomButton from '../../Components/Button/buttonIndex'
import styles from './profileStyles'
import { Auth } from 'aws-amplify'


const Profile = (props) => {

    const logout = () => {
        Auth.signOut();
    } 

    const [email, set_email] = useState(null);
    const [user_name, set_user_name] = useState(null);
 
    Auth.currentSession()
    .then(data => {
        let id_token = data.getIdToken();
        set_email(id_token.payload.email);
        //console.log(email);
        
        let access_token = data.getAccessToken();
        set_user_name(access_token.payload.username);
        // //console.log(user_name);
    })
    .catch(err => console.log(err));


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image style={styles.avatar}
                    source={{uri: 'https://bootdey.com/img/Content/avatar/avatar7.png'}}/>

                    <Text style={styles.name}>Jason Weng</Text>
                    <Text style={styles.userInfo}>{user_name} </Text>
                    <Text style={styles.userInfo}>{email} </Text>
                    <Text style={styles.userInfo}>New York </Text>

                </View>
            </View>
            
            <View style={styles.body}>
                {/* <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
                    </View>
                    <View style={styles.infoContent}>
                        <Text style={styles.info}>Home</Text>
                    </View>
                </View> */}
            
                <View style={styles.buttonsignout}>
                    <CustomButton  onPress= {logout} title='Sign Out'/>
                </View>
            
            </View>
        </View>

    );
};



export default Profile;

