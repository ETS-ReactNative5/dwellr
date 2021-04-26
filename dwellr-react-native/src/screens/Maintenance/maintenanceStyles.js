import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        marginLeft:20,
        marginRight:20,
        textAlign: 'center',
        fontSize: 30, 
        fontWeight: '400',
        marginBottom: 20
      },

      container: {
        backgroundColor: 'white',
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
        
      },

      input: {
        borderWidth:2, 
        height: 200,
        borderColor:'#47c9ba', 
        margin:40, 
        fontSize:20, 
        textAlign: 'left'
      }

    });

    
  export default styles;