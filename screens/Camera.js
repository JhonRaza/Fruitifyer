import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import CustomButton from '../utils/CustomButton';
import RNFS from 'react-native-fs';

export default function Camera({navigation}) {

    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [imageFile, setImage] = React.useState(null)

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            setImage(data)
            console.log(data);
            const filePath = data.uri;
            const base64image = await RNFS.readFile(filePath, 'base64');

            navigation.navigate('Detect', {image: base64image, te: 'aefcs', height: data.height/2, width: data.width/2})
            // const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
            // RNFS.moveFile(filePath, newFilePath)
            //     .then(() => {
            //         console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
                <CustomButton
                    title="Capture"
                    color='#1eb900'
                    onPressFunction={() => captureHandle()}
                />
            </RNCamera>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});

// 'use strict';
// import React, { PureComponent } from 'react';
// import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import Detect from ;
// const PendingView = () => (
//   <View
//     style={{
//       flex: 1,
//       backgroundColor: 'lightgreen',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}
//   >
//     <Text>Waiting</Text>
//   </View>
// );

// class ExampleApp extends PureComponent {
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           style={styles.preview}
//           type={RNCamera.Constants.Type.back}
//           flashMode={RNCamera.Constants.FlashMode.off}
//           androidCameraPermissionOptions={{
//             title: 'Permission to use camera',
//             message: 'We need your permission to use your camera',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           androidRecordAudioPermissionOptions={{
//             title: 'Permission to use audio recording',
//             message: 'We need your permission to use your audio',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//         >
//           {({ camera, status, recordAudioPermissionStatus }) => {
//             if (status !== 'READY') return <PendingView />;
//             return (
//               <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//                 <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
//                   <Text style={{ fontSize: 14 }}> SNAP </Text>
//                 </TouchableOpacity>
//               </View>
//             );
//           }}
//         </RNCamera>
//       </View>
//     );
//   }

//   takePicture = async function(camera) {
//     try{
//     const options = { quality: 0.5, base64: true };
//     const data = await camera.capture().then((data) => {

//       var imagePath = data.path;

//       this.props.navigator.push({
//           name: 'Detect',
//           component: Detect,
//           imagePath: imagePath,
//       });

//         })
//        .catch((err)=> /* */ )
      
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });

// export default ExampleApp;



// // import { NavigationContainer } from '@react-navigation/native';
// // import React, { useState } from 'react';
// // import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
// // import LinearGradient from 'react-native-linear-gradient';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import { RNCamera } from 'react-native-camera';
// // import { useCamera } from 'react-native-camera-hooks';
// // function App({navigation, initialProps}) {
// //   const [data, setData] = useState(null)
// //   const [
// //     { cameraRef, type, isRecording },
// //     { recordVideo, setIsRecording },
// //   ] = useCamera(initialProps);
// //   return (
// //     <View style={{ flex: 1 }}>
// //       <RNCamera ref={cameraRef} type={type} style={{ flex: 1 }} />
// //       {!isRecording && (
// //         <TouchableOpacity
// //           onPress={ () => {
// //             try {
// //               setIsRecording(true);
// //               const dat = cameraRef.takePicture();
// //               setData(dat)
// //               if (data != null){ 
// //               navigation.navigate('Detect', {dat: data})
// //               }
// //             } finally {
// //               setIsRecording(false);
// //             }
// //           }}
// //           style={{ width: '100%', height: 45 }}
// //         />
// //       )}
// //     </View>
// //   );
// // };


// // const styles = StyleSheet.create({
// //   screen: {
// //     flex: 1,
// //     backgroundColor: '#0D0B26',
// //   },
// //   saveArea: {
// //     backgroundColor: '#62d1bc',
// //   },
// //   topBar: {
// //     height: 50,
// //     backgroundColor: '#62d1bc',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   topBarTitleText: {
// //     color: '#ffffff',
// //     fontSize: 20,
// //   },
  
// //   btn: {
// //     width: 240,
// //     borderRadius: 30,
// //     backgroundColor: '#0D0B26',
// //     paddingHorizontal: 24,
// //     paddingVertical: 12,
// //     marginVertical: 8,
// //   },
// //   btnText: {
// //     fontSize: 18,
// //     color: '#ffffff',
// //     textAlign: 'center',
// //     fontFamily: 'Poppins-Regular'
// //   },
// //   rnCamera: {
// //     flex: 1,
// //     width: '94%',
// //     marginTop: 0,
// //     alignSelf: 'center',
// //   },
// //   rmCameraResult: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#eeeeee',
// //   },
// //   rmCameraResultText: {
// //     fontSize: 20,
// //     color: '#62d1bc'
// //   },
// //   cameraControl: {
// //     // height: 180,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   bigCard: {
// //     backgroundColor: '#f2f2f2',
// //     borderTopLeftRadius: 350,
// //     height: Dimensions.get('window').height,
// //     width: Dimensions.get('window').width,
// //     position: 'absolute',
// //     justifyContent: 'center',
// //     alignItems: 'center'
// // }
// // });

// // export default App;