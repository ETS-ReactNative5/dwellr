import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image : {
        width: '100%',
        height: 850,
        resizeMode: 'cover',
        paddingTop: 100

    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        marginTop: 50,
        marginLeft: 25,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'

    }
});

export default styles;