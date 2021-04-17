import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 25, 
    fontWeight: '400',
    marginBottom: 50
  },
  text1: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 25, 
    fontWeight: '400',
  },
  amount: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 25, 
    fontWeight: '700',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});



export default styles;