import { View, Text } from 'react-native'
import React from 'react'
import Home from './Home'
import Profile from './Profile'
import HomeAlt from './HomeAlt'
import Camera from './Camera'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function Base({navigation}) {
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