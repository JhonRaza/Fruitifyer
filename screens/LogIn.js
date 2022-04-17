import { View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import React, {useState, useContext} from 'react'
import DatePicker from 'react-native-datepicker'
import DateTimePicker from '@react-native-community/datetimepicker';

import LinearGradient from 'react-native-linear-gradient';
import {UserContext} from '../context'

export default function LogIn(props) {
    const {Name,Email,Password,DOB, Mass, Logged} = useContext(UserContext);
    const [name, setName] = Name;
    const [email, setEmail] = Email;
    const [password, setPassword] = Password;
    const [dob, setDOB] = DOB;
    const [mass, setMass] = Mass;
    const [logged, setLogged] = Logged
    const [pressed, setPressed] = useState(false)
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const showPicker = () => {
        setIsPickerShow(true);
      };
    
      const onChange = (event, value) => {
        setDate(value);
        if (Platform.OS === 'android') {
          setIsPickerShow(false);
          setPressed(true)
          setDOB(date.toDateString())
        }
      };

     const functionCombined = async () => {
       await setLogged(true)
       props.navigation.navigate('Base')
    } 

    return (
    <LinearGradient colors={['rgba(118, 52, 170, 1)', 'rgba(18, 39, 151, 0.7256)']} start = {{x: 0, y: 1}} end = {{x: 1, y: 0}}
    style={styles.linearGradient}
  >
    {/* <Text>{dob}</Text> */}
      <Image source={require('../Fruitifyer-logo.png')} style={{height: 80, width: 80, marginTop: -60}}/>
      <View style={styles.innerCard}>
          <View style={{alignSelf: 'center', alignContent: 'center'}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 23, color: 'black', marginTop: 10, marginLeft: 0, paddingBottom: 30}}>Log in</Text>
        </View>
        {/* <Text style={styles.title}>Email</Text> */}
        <TextInput style={styles.inputEmail} placeholder='Email' onChangeText={(t)=>{setEmail(t)}}/>
        {/* <TextInput style={styles.inputEmail} placeholder='Name' onChangeText={(t)=>{setName(t)}}/> */}
        <TextInput style={styles.inputPassword} placeholder='Password' secureTextEntry={true} onChangeText={(t)=>{setPassword(t)}}/>
      {/* {isPickerShow && ( */}
      {/* <View style={{flexDirection: 'row'}}>
        
        <View style={styles.pickedDateContainer}>
        <Text style={pressed ? (styles.notPickedDate): (styles.pickedDate)}>{date.toDateString()}</Text>
      </View>
      {!isPickerShow && (
        <View>
          <TouchableOpacity style={styles.btn} onPress={showPicker}>
              <Text style={{color:'white'}}>Date of birth</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          dateFormat="dayofweek day month"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )} */}
        {/* <TextInput style={styles.inputMass} placeholder='Body mass (Kilograms)' secureTextEntry={true} onChangeText={(t)=>{setMass(t)}}/> */}
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 7}}>
        <TouchableOpacity onPress={functionCombined} style={styles.SignUp}>
          <Text style={{color: 'white', fontFamily: 'Poppins-Regular', fontSize: 20}}>Log In</Text>
      </TouchableOpacity></View>
      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        
          <Text style={{color: '#a1a1a1', fontFamily: 'Poppins-Regular', fontSize: 13}}>Don't have an account? </Text>
          <TouchableOpacity onPress={()=>{props.navigation.navigate('Sign Up')}}>
          <Text style={{color: 'rgba(118, 52, 170, 1)', fontFamily: 'Poppins-Medium', textDecorationLine: 'underline', fontSize: 13}}>Create one!</Text>
      </TouchableOpacity></View>
      </View>
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   paddingTop: StatusBar.currentHeight,
    // },
  
    innerCard:{
        backgroundColor: '#f2f2f2',
        height: Dimensions.get('window').height-300,
        width: Dimensions.get('window').width-50,
        borderRadius: 40,
        paddingVertical: 40

    },
    inputEmail:{
        borderBottomColor: '#a3a3a3',
        borderBottomWidth: 0.5,
        marginHorizontal: 35,
        fontFamily: 'Poppins-Regular',
        // paddingBottom: 40,
        // flex: ,
    },
    inputMass:{
        borderBottomColor: '#a3a3a3',
        borderBottomWidth: 0.5,
        marginHorizontal: 35,
        marginTop: 5,
        // marginTop: 30,
        fontFamily: 'Poppins-Regular'
        // flex: ,
    },

    inputPassword:{
        borderBottomColor: '#a3a3a3',
        borderBottomWidth: 0.5,
        marginHorizontal: 35,
        // marginTop: 30,
        fontFamily: 'Poppins-Regular'
        // flex: ,
    },
    scrollView: {
      backgroundColor: 'pink',
      // marginHorizontal: 20,
    },
    title:{
        marginLeft: 35
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
      // alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 42,
      fontFamily: 'Poppins'
    },
    pickedDateContainer: {
        marginTop: 20,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        marginLeft: 37,
      },
      pickedDate: {
        fontSize: 15,
        color: '#a2a2a2',
        fontFamily: 'Poppins-Regular',
        paddingBottom: 10,
        borderBottomColor: '#a3a3a3',
        borderBottomWidth: 0.5,
      },
      notPickedDate: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        paddingBottom: 10,
        borderBottomColor: '#a3a3a3',
        borderBottomWidth: 0.5,
      },
    //   btnContainer: {
    //     paddingTop: 10,
    //     fontSize: 15,
    //     backgroundColor: 'rgba(118, 52, 170, 1)',
    //     height: 20,
    //     width: 40
    //   },
      btn: {
        // paddingTop: 10,
        fontSize: 10,
        color: 'white',
        backgroundColor: 'rgba(118, 52, 170, 1)',
        height: 20,
        width: 100,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 25
      },
      // This only works on iOS
      datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      SignUp: {
        fontSize: 10,
        color: 'white',
        backgroundColor: 'rgba(18, 39, 151, 0.7256)',
        height: 40,
        width: 150,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        // marginLeft: 25 
     }
  });