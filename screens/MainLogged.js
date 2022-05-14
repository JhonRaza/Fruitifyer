import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Base from '../screens/Base'
import LinearGradient from 'react-native-linear-gradient';
import {Camera1} from '../screens/Camera'
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

import { createStackNavigator } from '@react-navigation/stack';
// import 
const Stack = createStackNavigator();
export default function MainLogged(props) {
const [user, setUser] = React.useState(props.user)
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
    const {Name,Email,Password,DOB, Mass, Logged} = useContext(UserContext);
    // console.log(logged)
  return (
    <NavigationContainer>
    <Stack.Navigator>
  {user? (<Stack.Screen name="Base" component={Base} options={{headerShown: false, cardStyleInterpolator: forFade}}/>): null}
  {user? (<Stack.Screen name="Camera" component={Camera1} />): null}
  {user? (<Stack.Screen name="Details" component={Details} />): null}
  {user? (<Stack.Screen name="Fruit Details" component={FruitDetails} options={{ cardStyleInterpolator: forFade }, ({ route }) => ({ title: route.params.name }) } />): null}
  {user? (<Stack.Screen name="Detect" component={Detect} options={{title:'Detect'}} />): null}
  {user? (<Stack.Screen name="Plans" component={Plans} options={{headerShown: false}} />): null}
  </Stack.Navigator>
 
</NavigationContainer>
  )
}