import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import RNFetchBlob from "rn-fetch-blob";
// import {  } from 'react-native-gesture-handler';

export default function Detect({ route, navigation }) {
  // let image = props.navigation.getParam('image')
  let t = route.params.te
  let img = route.params.image
  let h = route.params.height
  let w = route.params.width
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
  return (
    <View style={styles.container}>
      <Image source={{ uri: `data:image/jpeg;base64,${img}` }} style={{ height: h / 5, width: w / 5 }} />
      <View style={{marginTop: 30}}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Plans')
        }} style={{backgroundColor: 'rgba(18, 39, 151, 0.7256)', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10}}>
          <Text style={{color: 'white'}}>Learn More
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Text>{t}</Text> */}
    </View>
  )
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
})