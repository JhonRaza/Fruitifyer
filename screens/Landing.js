import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import LogIn from './LogIn';
import SignUp from './SignUp';
export default function Landing() {
  return (
    // <NavigationContainer>
        <Stack.Navigator initialRouteName='Log In'>
            <Stack.Screen name = 'Log In' component={LogIn} options={{headerShown: false}}/>
            <Stack.Screen name = 'Sign Up' component={SignUp} options={{headerShown: false}}/>
        </Stack.Navigator>
    // </NavigationContainer>
  )
}