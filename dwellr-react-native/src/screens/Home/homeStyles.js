import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme';


const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    image : {
        width: '100%',
        height: 850,
        resizeMode: 'cover',
        paddingTop: 100,
        alignItems: 'center',

    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        width: '100%',
        marginLeft: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 280,
        height: 50,
        backgroundColor: "white",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.dwellr

    }
});

export default styles;