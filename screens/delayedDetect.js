import { View, Text, Image, Button, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import RNFetchBlob from "rn-fetch-blob";
// import {  } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { UserContext } from '../context'
import auth from '@react-native-firebase/auth';

export default function Detect({ route, navigation }) {
  const [loaded, setLoaded] = React.useState(false)
  const [detection, setDetection] = React.useState('')
  const { Email } = React.useContext(UserContext);
  const [email, setEmail] = Email
  const [dets, setDets] = React.useState()
  const [dob, setDOB] = React.useState()
  const [mass, setMass] = React.useState()
  const [times, setTimes] = React.useState()
  // const [uid, setUID] = React.useState()
  const [ref, setRef] = React.useState(null)
  // let image = props.navigation.getParam('image')
  let t = route.params.te
  let img = route.params.image
  let h = route.params.height
  let w = route.params.width
  useEffect(() => {
    setTimeout(() => {
      //make axios call
      setLoaded(true)

    }, 2000)
  }, [])
  const detected = () => {
    // console.log(ref)
    // firestore().collection('users').where('email','==', email).update({
    //   detections: firestore.FieldValue.arrayUnion('Apple')
    // })
    //   const ref = firestore().collection('users')
    //   const ref1 = ref.where('email','==',email)

    //   ref1.update({
    //   'detections': firestore.FieldValue.arrayUnion('Apple'),
    // });
    const usersRef = firestore().collection('users')
    const query = usersRef.where('email', "==", auth().currentUser.email)
    query.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log()
        if (doc.data().detections) {
          setDets(doc.data().detections)
          const temp = [...dets, 'Apple']
          const name = auth().currentUser.displayName
          const uid = auth().currentUser.uid
          const email = auth().currentUser.email
          setMass(doc.data().mass)
          setTimes(doc.data().times)
          setDOB(doc.data().dob)
          doc.ref.set({
            detections: temp,
            name: name,
            email: email,
            dob: dob,
            mass: mass,
            times: times,
            uid: uid
          })
            .then(() => {
              console.log('detection added!')
            }).catch(() => {
              console.log('fruit not added!')
            })
        }
        console.log('type ' + typeof (dets))
        // console.l
      })
      // navigation.navigate('Profile')
    })
    //   query.get().then((DocumentSnapshot) => {
    //     DocumentSnapshot.forEach((doc) => {
    //       setDets(doc.data().detections)
    //       const temp = [...dets, 'Apple']
    //       doc.data().set({
    //         detections: firestore.FieldValue.arrayUnion(temp),
    //       })
    //     })
    //     navigation.navigate('Profile')
    //   }
    // )
    // .catch(()=>{
    //   console.log('unable to add')
    // })
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
  //     return fs.unlink(imagePath);
  //   });
  if (loaded) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: `data:image/jpeg;base64,${img}` }} style={{ height: h / 5, width: w / 5 }} />
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity onPress={() => {
            detected()
          }} style={{ backgroundColor: 'rgba(18, 39, 151, 0.7256)', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10 }}>
            <Text style={{ color: 'white' }}>Learn More
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
  else {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
        <Text>Hol' up while we detect what this fruit is!</Text>
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