import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import Profile from './Profile'
import HomeAlt from './HomeAlt'
import Camera1 from './Camera'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {UserContext} from '../context'
import auth from '@react-native-firebase/auth';

const Tab = createMaterialBottomTabNavigator();

export default function Base({navigation}) {
  const {Name,Email,Password,DOB, Mass, Logged, Loaded} = React.useContext(UserContext);

  const[logged, setLogged] = Logged
  const[loaded, setLoaded] = Loaded
  const[name, setName] = Name
  
if (loaded){
  return (
      <Tab.Navigator initialRouteName='Home' activeColor="#1DAEFF"  barStyle={{ backgroundColor: '#0D0B26',
            // padding: 30,
        //     elevation: 20,
        //     bottom: 0,
        //     height: 80,
        //     paddingTop: 10,
        //   borderRadius: 35
    }} 
          labeled = {false}
      >
          <Tab.Screen name="Home" component={HomeAlt} options={{
          // tabBarLabel: 'Camera',
          tabBarStyle: {
            display: "none",
          },
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
         />
      
        {/* <Tab.Screen name="Cam" component={Camera} options={{
            // headerShown: true,
            // hide the bottom tab bar on Product Screen
            tabBarStyle: { display: "none" },
            tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons name="camera" color = {color} size={26} />,
          }}/> */}
      <Tab.Screen name="Profile" component={Profile} options={{
          // tabBarLabel: 'Camera',
          tabBarStyle: {
            display: "none",
          },
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="face-man-profile" color={color} size={26} />
          ),
        }}
         />
         
         
    </Tab.Navigator>

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