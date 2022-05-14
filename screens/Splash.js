import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Dimensions
  } from 'react-native';
import React, {useContext, useEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { UserContext } from '../context'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Splash() {
  const auth = getAuth();
    useEffect(()=>{
        function checkAuth(){
            onAuthStateChanged(auth, (user) => {
              if (user) {
                const uid = user.uid;
                setLogged(true)
              } else {
                  setLogged(false)
              }
            })};
            checkAuth()
    }, [])
    
  return (
    <LinearGradient colors={['rgba(118, 52, 170, 1)', 'rgba(18, 39, 151, 0.7256)']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
    style={styles.linearGradient}
  >
    <Image source={require('../Fruitifyer-logo.png')} style={{ position: 'absolute', height: 300, width: 300, top: Dimensions.get('window').height / 4.5, alignSelf: 'center' }} />
    <Text style={{ position: 'absolute', fontSize: 40, paddingTop: 130, alignSelf: 'center', color: '#FFFFFF', fontFamily: 'Poppins-Regular' }}>Fruitifyer</Text>
  </LinearGradient>
  )
    
}
const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   paddingTop: StatusBar.currentHeight,
    // },
  
  
    scrollView: {
      backgroundColor: 'pink',
      // marginHorizontal: 20,
    },
    linearGradient: {
      flex: 1,
      flexDirection: 'column',
      // alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 42,
      fontFamily: 'Poppins'
    },
  });
  