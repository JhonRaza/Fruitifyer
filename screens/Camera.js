import React from 'react';
import {
    View,
    StyleSheet,
    Platform,
    ActivityIndicator
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import CustomButton from '../utils/CustomButton';
// import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import { sha256 } from 'react-native-sha256'
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// import Axios from 'react-native-axios/lib/core/Axios';
export default function Camera({navigation}) {

    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [imageFile, setImage] = React.useState(null)
    const [loaded, setLoaded] = React.useState(true)
    const [fruit, setFruit] = React.useState(null)
    const [photo, setPhoto] = React.useState()
    const postImage = (localImageUri, remoteUrl) =>
    RNFetchBlob.fetch(
        'POST',
        remoteUrl,
        { 'Content-Type': 'multipart/form-data' },
        [
            {
                name: 'myimage',
                filename: 'myimage',
                type: 'image/jpeg',
                data: RNFetchBlob.wrap(Platform.OS === 'ios' ? localImageUri.replace('file://', '') : localImageUri),
            },
        ],
    ).then(response => {
        // do something
    }).catch(error => {
        // do something
    });
    React.useEffect(()=>{
        captureHandle()
    },[])
    const captureHandle = async () => {
        try {
            let options = {
                mediaType: 'photo',
                maxWidth: 300,
                maxHeight: 550,
            }
            const form = new FormData()
            let f;
            await launchCamera(options, (response) => {
                
                if (response.didCancel) {
                  alert('User cancelled camera picker');
                  navigation.goBack()
                  return;
                } else if (response.errorCode == 'camera_unavailable') {
                  alert('Camera not available on device');
                  navigation.goBack()
                  return;
                } else if (response.errorCode == 'permission') {
                  alert('Permission not satisfied');
                  navigation.goBack()
                  return;
                } else if (response.errorCode == 'others') {
                  alert(response.errorMessage);
                  navigation.goBack()
                  return;
                }
                if (response.assets){
                    console.log(response.assets)
                form.append('file', {
                    uri: response.assets[0].uri,
                    type: response.assets[0].type,
                    name: response.assets[0].fileName,
                    // data: response.assets[0].base64
                })
            }
            console.log(response.assets[0].uri)
            f = response.assets[0].uri
            // 
                
                // setPhoto(response);
                console.log('f ' + f)
              });
            setPhoto(f)

              setLoaded(false)
              let response1 = await fetch('http://172.15.67.241:5000/predict',
                {
                    method: 'POST',
                    body: form,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                })
                    let json = await response1.json()
                    if (json){
                        console.log(json.class_name)
                        setFruit(json.class_name)
                        console.log('fruit ' + fruit)
                        setLoaded(true)
                        navigation.navigate('Detect', {uri: f, fru: json.class_name})

                    }
        } catch (error) {
            console.log(error);
        }
    }
    if (loaded) {
    return (
        <View style={styles.body}>
            {/* <RNCamera code to call the open camera again
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
                <CustomButton
                    title="Capture"
                    color='#1eb900'
                    onPressFunction={() => captureHandle()}
                />
            </RNCamera> */}
        </View>
    );
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
    body: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }, preloader: {
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