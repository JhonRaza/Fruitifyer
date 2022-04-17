import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function App({navigation}) {
  const [img, setImage] = useState(null);

  return (
    
    <View style={styles.screen}>
      {/* <SafeAreaView style={styles.saveArea}>
        <View style={styles.topBar}>
          <Text style={styles.topBarTitleText}>Recognize fruit</Text>
        </View>
      </SafeAreaView> */}

      {img ? (
        <View style={[styles.rnCamera, styles.rmCameraResult]}>
          {/* <Text style={styles.rmCameraResultText}>{barcode.data}</Text>
          <Text style={styles.rmCameraResultText}>{barcode.type}</Text> */}
        </View>
      ) : (
        <RNCamera
          style={styles.rnCamera}
        />
      )}

      <View style={styles.cameraControl}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Detect')}>
          {/* <Text style={styles.btnText}>Capture image</Text> */}
          <MaterialCommunityIcons name="camera" color = {'#1DAEFF'} size={26} style={{alignSelf: 'center'}} />
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0D0B26',
  },
  saveArea: {
    backgroundColor: '#62d1bc',
  },
  topBar: {
    height: 50,
    backgroundColor: '#62d1bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitleText: {
    color: '#ffffff',
    fontSize: 20,
  },
  
  btn: {
    width: 240,
    borderRadius: 30,
    backgroundColor: '#0D0B26',
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginVertical: 8,
  },
  btnText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular'
  },
  rnCamera: {
    flex: 1,
    width: '94%',
    marginTop: 0,
    alignSelf: 'center',
  },
  rmCameraResult: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  rmCameraResultText: {
    fontSize: 20,
    color: '#62d1bc'
  },
  cameraControl: {
    // height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigCard: {
    backgroundColor: '#f2f2f2',
    borderTopLeftRadius: 350,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
}
});

export default App;