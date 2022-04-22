import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Base from '../screens/Base'
import LinearGradient from 'react-native-linear-gradient';
import Home from '../screens/Home'
import Camera from '../screens/Camera'
// import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Details from '../screens/Details'
import FruitDetails from '../screens/FruitDetails'
import Dets from '../screens/Dets'
import Landing from '../screens/Landing'
import Detect from '../screens/Detect'
import Plans from '../screens/Plans'
import {UserContext} from '../context'

import { createStackNavigator } from '@react-navigation/stack';
// import 
const Stack = createStackNavigator();
export default function Main() {
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
    const {Name,Email,Password,DOB, Mass, Logged} = useContext(UserContext);
    const [logged, setLogged] = Logged
    // console.log(logged)
  return (
    <NavigationContainer>
    <Stack.Navigator>
    {!logged? (<Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>): null}
  {logged? (<Stack.Screen name="Base" component={Base} options={{headerShown: false, cardStyleInterpolator: forFade}}/>): null}
  {logged? (<Stack.Screen name="Camera" component={Camera} />): null}
  {logged? (<Stack.Screen name="Details" component={Details} />): null}
  {logged? (<Stack.Screen name="Fruit Details" component={FruitDetails} options={{ cardStyleInterpolator: forFade }, ({ route }) => ({ title: route.params.name }) } />): null}
  {logged? (<Stack.Screen name="Detect" component={Detect} options={{title:'Detect'}} />): null}
  {logged? (<Stack.Screen name="Plans" component={Plans} options={{headerShown: false}} />): null}
  </Stack.Navigator>
 
</NavigationContainer>
  )
}