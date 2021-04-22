import React from 'react';
import {View, Text, TextInput} from 'react-native';
import CustomButton from '../../Components/Button/buttonIndex'
import styles from './maintenanceStyles';


class Maintenance extends React.Component {
    constructor()
    {
        super(); 
        this.state={
            request:'',
        }
    }

    submit()
    {
        console.warn(this.state)
    }

    render() {
        return (
            <View>
                <Text style={styles.title}> Maintenance Request Form </Text>
                <TextInput
                    placeholder="What seems to be the problem?"
                    onChangeText={(text)=>{this.setState({request:text})}}
                    multiline={true}
                    style={{borderWidth:2, height: 200, borderColor:'#47c9ba', margin:40, fontSize:20, textAlign: 'left', }}
                />

                <CustomButton  onPress= {() => this.submit()} title='Submit Requeset'/>

                
            </View>
        )
    }
}

export default Maintenance;