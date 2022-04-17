/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useContext} from 'react';
import type {Node} from 'react';
// import 'react-native-gesture-handler';
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
import Base from './screens/Base'
import LinearGradient from 'react-native-linear-gradient';
import Home from './screens/Home'
import Camera from './screens/Camera'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Details from './screens/Details'
import FruitDetails from './screens/FruitDetails'
import Dets from './screens/Dets'
import Landing from './screens/Landing'
import {UserDetails} from './context'
import Main from './screens/Main'
// import {UserContext} from './context'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const App: () => Node = () => {
  // console.log()
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const [loaded, setLoaded] = useState(false) //make a native splash screen later
  // const [logged, setLogged] = useState(false)
  // const {Logged} = useContext(UserContext);
  // const [name, setName] = Name;
  //   const [email, setEmail] = Email;
  //   const [password, setPassword] = Password;
  //   const [dob, setDOB] = DOB;
  //   const [mass, setMass] = Mass;
    // const [logged, setLogged] = Logged
  useEffect(() => {
      setTimeout(() => {
        setLoaded(true);
      }, 3000);
    }, [])
  if (!loaded) {
  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView style={styles.scrollView}>
    <LinearGradient colors={['rgba(118, 52, 170, 1)', 'rgba(18, 39, 151, 0.7256)']} start = {{x: 0, y: 1}} end = {{x: 1, y: 0}}
          style={styles.linearGradient}
        >
        <Image source={require('./Fruitifyer-logo.png')} style={{position: 'absolute', height: 300, width: 300, top: Dimensions.get('window').height/4.5, alignSelf: 'center'}}/>
        <Text style={{position: 'absolute', fontSize: 40, paddingTop: 130, alignSelf: 'center', color: '#FFFFFF', fontFamily: 'Poppins-Regular'}}>Fruitifyer</Text>
        </LinearGradient>

    //   </ScrollView>
    // </SafeAreaView>
  );
  }
  else{
    // if (logged){
    return (
      <UserDetails>
      <Main />
    </UserDetails>
    )
  // }
  
}

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

export default App;
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={styles.bg} contentContainerStyle={{
//           // flex: 1
//        }}>
//         {/* <Header /> */}
//         {/* <LinearGradient colors={['green', 'red']} style={styles.linearGradient}> */}
//         {/* <View> */}
//             <Text style = {{color: '#000000'}}>fidcks</Text>
//         {/* </View> */}
//       </ScrollView>
//       {/* </LinearGradient> */}

//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   bg:{
//     backgroundColor: 'green',
//     height: window.length
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   linearGradient: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 5
//   },
// });

// export default App;
