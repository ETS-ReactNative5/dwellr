import {StyleSheet, Dimensions} from 'react-native';

const styles= StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        backgroundColor: '#47c9ba', 
        height: 50,
        width: 350,
        borderRadius: 40,
        // width: Dimensions.get('screen').width - 20,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white', 
        fontSize: 18, 
        fontWeight: 'bold', 
        alignSelf:'center', 
        textTransform: 'uppercase', 
    },
});

export default styles; 