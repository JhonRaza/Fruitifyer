import { View, Text, Image, Button, TouchableOpacity, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import RNFetchBlob from "rn-fetch-blob";
// import {  } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { UserContext } from '../context'
import auth from '@react-native-firebase/auth';
import axios from 'axios'

export default function Detect({ route, navigation }) {
  const [loaded, setLoaded] = React.useState(false)
  const [detection, setDetection] = React.useState('')
  const { Email } = React.useContext(UserContext);
  const [email, setEmail] = Email
  const [ref, setRef] = React.useState(null)
  // let image = props.navigation.getParam('image')
  let t = route.params.te
  // let img = route.params.image
  let path = route.params.uri
  let fruit = route.params.fru
  let h = route.params.height
  let w = route.params.width
  // const file = new File([img], 'imageFile', {
  //   type: img.type
  // })
  // // const url = URL.createObjectURL(kc)
  // var data = new FormData()
  // data.append('Image', path, 'Image')
  // let bodyFormData = new FormData();
  // bodyFormData.append(`Image`, {
  //   uri: path,
  // });
  useEffect(() => {
    console.log('path ' + path)
    // axios.post('http://192.168.18.35:5000/predict', {
    //             Image: data
    //         }).then(function(response){
    //             console.log('response success' + response)
    //         }).catch(function (error) {
    //             console.log('response failed' + error);
    //           });
    // const { data } = await axios({
    //   method: 'post',
    //   url: `http://192.168.18.35:5000/predict`,
    //   headers: {
    //     'Content-Type': 'multipart/form-data' 
    //   },
    //   data: bodyFormData
    // });

    // console.log('UPLOAD', data);
    setTimeout(() => {
      // const file = new Blob([`data:image/jpeg;base64,${path}`], { type: 'image/jpeg' });
      //make axios call
      setLoaded(true)

    }, 2000)
  }, [])
  const detected = () => {
    const usersRef = firestore().collection('users')
    const query = usersRef.where('email', "==", auth().currentUser.email)
    query.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.update({
          detections: firestore.FieldValue.arrayUnion(fruit + '|' + Date.now()),
        })
      })
      setTimeout(() => {
        navigation.navigate('Profile')

      }, 1000)
    }
    )
  }
  // const
  // const fs = RNFetchBlob.fs; 
  // let imagePath = null;
  // RNFetchBlob.config({
  //   fileCache: true
  // })
  //   .fetch("GET", dat)
  //   // the image is now dowloaded to device's storage
  //   .then(resp => {
  //     // the image path you can use it directly with Image component
  //     imagePath = resp.path();
  //     return resp.readFile("base64");
  //   })
  //   .then(base64Data => {
  //     // here's base64 encoded image
  //     console.log(base64Data);
  //     // remove the file from storage
  //     return fs
  if (loaded) {
    if (fruit){
    return (
      <View style={styles.container}>
        {/* <Image source={{ uri: `data:image/jpeg;base64,${img}` }} style={{ height: h / 5, width: w / 5 }} /> */}
        <Image source={{ uri: path }} style={{ height: Dimensions.get('window').height / 1.5, width: Dimensions.get('window').width / 1.3 }} />
        <View style={{ marginTop: 30 }}>

          <Text style={{ fontFamily: 'Poppins-Regular', color: 'black', paddingBottom: 20, alignSelf: 'center' }}>{fruit}</Text>
          <TouchableOpacity onPress={() => {
            detected()
          }} style={{ backgroundColor: 'rgba(18, 39, 151, 0.7256)', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 15 }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>Eat!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Plans')
          }} style={{ backgroundColor: 'rgba(18, 39, 151, 0.7256)', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 15, marginTop: 10 }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>Learn More
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Text>{t}</Text> */}
      </View>
    )
        }
        else {
          return (
            <View style={styles.container}>
              {/* <Image source={{ uri: `data:image/jpeg;base64,${img}` }} style={{ height: h / 5, width: w / 5 }} /> */}
              <Image source={{ uri: path }} style={{ height: Dimensions.get('window').height / 1.3, width: Dimensions.get('window').width / 1.3 }} />
              <View style={{ marginTop: 30 }}>
                <Text style={{ fontFamily: 'Poppins-Regular', color: 'black', paddingVertical: 20 }}>No detections!</Text>
                <TouchableOpacity onPress={() => {
                  detected()
                }} style={{ backgroundColor: 'rgba(18, 39, 151, 0.7256)', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10 }}>
                  <Text style={{ color: 'white' }}>Eat!
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('Plans')
                }} style={{ backgroundColor: 'rgba(18, 39, 151, 0.7256)', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10 }}>
                  <Text style={{ color: 'white' }}>Learn More
                  </Text>
                </TouchableOpacity>
              </View>
              {/* <Text>{t}</Text> */}
            </View>
          )
        }
  }
  else {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    )
  }
  
}
const styles = StyleSheet.create({
  t: {
    color: 'black'
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -15,
    padding: 10,
  },
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