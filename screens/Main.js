import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, {useContext, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Base from '../screens/Base'
import LinearGradient from 'react-native-linear-gradient';
import Camera1 from '../screens/Camera'
// import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Details from '../screens/Details'
import FruitDetails from '../screens/FruitDetails'
import Dets from '../screens/Dets'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import Detect from '../screens/Detect'
import Plans from '../screens/Plans'
import {UserContext} from '../context'
import firebase from '../database/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import auth from '@react-native-firebase/auth';

import { createStackNavigator } from '@react-navigation/stack';
// import 
const Stack = createStackNavigator();
export default function Main(props) {
  // const {Logged} = React.useContext(UserContext)
const [user, setUser] = React.useState()
  const {Name,Email,Password,DOB, Mass, Logged, Loaded} = useContext(UserContext);
  const [logged, setLogged] = Logged
  const [loaded, setLoaded] = Loaded
  const [name, setName] = Name
  React.useEffect(()=>{
    console.log('logged main' + logged)
    setLoaded(false)

    if (auth().currentUser){
      setLogged(true)
      setName(auth().currentUser.displayName)

    }
    setTimeout(()=>{
    setLoaded(true)

    }, 500)
    
}, [])
//   useEffect(()=>{
//     console.log('logged main' + logged)
//     if (auth().currentUser){
//       setLogged(true)
//       setName(auth().currentUser.displayName)
//     }
// }, [])
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
    
if (loaded){
    // console.log(logged)
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName='Base'>
    {!logged? (
    <Stack.Screen name = 'Log In' component={LogIn} options={{headerShown: false}}/>    
    ): null}
    {!logged? (
    <Stack.Screen name = 'Sign Up' component={SignUp} options={{headerShown: false}}/>
    ): null}
  {logged? (<Stack.Screen name="Base" component={Base} options={{headerShown: false, cardStyleInterpolator: forFade}}/>): null}
  {logged? (<Stack.Screen name="Camera" component={Camera1} />): null}
  {logged? (<Stack.Screen name="Details" component={Details} />): null}
  {logged? (<Stack.Screen name="Fruit Details" component={FruitDetails} options={{ cardStyleInterpolator: forFade }, ({ route }) => ({ title: route.params.name }) } />): null}
  {logged? (<Stack.Screen name="Detect" component={Detect} options={{title:'Detect'}} />): null}
  {logged? (<Stack.Screen name="Plans" component={Plans} options={{headerShown: false}} />): null}
  </Stack.Navigator>
 
</NavigationContainer>
  )
}

else{
  return (
    <View style={styles.preloader}>
      <ActivityIndicator size="large" color="#9E9E9E" />
    </View>
  )
}
}
const styles = StyleSheet.create({
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})