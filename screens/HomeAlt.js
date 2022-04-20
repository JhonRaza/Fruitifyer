import { View, Text, StyleSheet, Button, TouchableNativeFeedback, ScrollView, Dimensions, Image, ImageBackground, Pressable, Modal } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CardList } from 'react-native-card-list';
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from '@react-navigation/native';
// import { Icon, Slider } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { shadow } from 'react-native-paper';
import DropShadow from "react-native-drop-shadow";
import Animated from 'react-native-reanimated';
// import Modal from "react-native-modal";

// import { Icon, Slider } from 'react-native-elements'

export default Home = () => {
    const refRBSheet = React.useRef();
    const [rippleColor, setRippleColor] = React.useState('grey');
    const navigator = useNavigation()
    const [rippleOverflow, setRippleOverflow] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false)
    return (

        <View style={styles.bigCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, paddingLeft: 40 }}>
                <View>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 35, color: 'black', top: 25 }}>Hello, Jhon!</Text>
                    <Text style={{ textAlign: 'center', fontSize: 15, fontFamily: 'Poppins-ExtraLight', color: 'black', marginTop: 15, marginLeft: -12 }}>What are you upto today?</Text>
                </View>
                <TouchableOpacity style={{ borderRadius: 100, borderColor: '#000000', borderWidth: 0.5, padding: 2, alignSelf: 'flex-end', top: 0, right: 20, height: 37, width: 37, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => { navigator.navigate('Profile') }}>
                    <Image source={require('../me.jpeg')} style={{ borderRadius: 100, height: 33, width: 33 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.innerCard}>

                {/* <View style={styles.imageWrapper}>
     <ImageBackground style={styles.theImage} source={require('../me.jpeg')}>
     <Text style={{fontFamily: 'Poppins-Medium', fontSize: 20, paddingBottom: 30, color: 'white'}}>Learn</Text>
     </ImageBackground>style={styles.container}
</View> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <DropShadow style={styles.shadowProp}>

                        <TouchableOpacity style={{ height: 130, width: 130, borderRadius: 25 }} onPress={() => {
                            refRBSheet.current.open()
                            // setRippleColor('grey');
                            // setRippleOverflow(!rippleOverflow);
                            // refRBSheet.current.open()

                        }}
                            background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}>
                            <LinearGradient colors={['rgba(118, 52, 170, 1)', 'rgba(18, 39, 151, 0.7256)']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.linearGradient}>
                                <Image source={require('../assets/Phone.png')} style={{ height: 120, width: 120, position: 'absolute', left: -21, top: -15 }} />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, position: 'absolute', bottom: 5, right: 8, color: 'white' }}>Learn</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </DropShadow>
                    <DropShadow style={styles.shadowProp}>
                        <TouchableOpacity style={{ height: 130, width: 130, borderRadius: 25, marginLeft: 40 }} onPress={() => { navigator.navigate('Camera') }}>
                            <LinearGradient colors={['rgba(118, 52, 170, 1)', 'rgba(18, 39, 151, 0.7256)']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.linearGradient}>
                                <Image source={require('../assets/Search.png')} style={{ height: 170, width: 130, position: 'absolute', left: -20, top: -42 }} />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, position: 'absolute', bottom: 5, right: 8, color: 'white' }}>Detect</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </DropShadow>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
                    <DropShadow style={{
                        shadowColor: '#171717',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.4,
                        shadowRadius: 2, position: 'absolute'
                    }}>
                        <TouchableOpacity style={{ height: 130, width: 130, borderRadius: 25 }} onPress={() => { navigator.navigate('Details') }}>
                            <LinearGradient colors={['rgba(118, 52, 170, 1)', 'rgba(18, 39, 151, 0.7256)']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.linearGradient}>
                                <Image source={require('../assets/Box.png')} style={{ height: 170, width: 130, position: 'absolute', left: -20, top: -42 }} />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, position: 'absolute', bottom: 5, right: 8, color: 'white' }}>Inform</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </DropShadow>
                    
                </View>
                
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={false}
                    closeOnPressMask={true}

                    customStyles={{
                        wrapper: {
                            backgroundColor: 'rgba(52, 52, 52, 0.8)'
                            // opacity: 0.2
                        },
                        draggableIcon: {
                            backgroundColor: "#E5E5E5",
                            height: 0
                        },
                        container: {
                            paddingHorizontal: 15,
                            paddingTop: 0,
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                            overflow: 'hidden',
                            height: '45%'
                        }
                    }}
                >
                    {/* <View style={styles.bottomSheetHeader}>
          <Text style={{fontWeight: 'bold'}}>Deliver to</Text>
          {/* <Icon name='x-circle'  type='feather' size={17}/> */}
                    {/* </View> */}

                    <View style={styles.savedLocation}>
                        <Pressable onPress={() => refRBSheet.current.close()}>
                            <Text style={{ fontFamily: 'Poppins-Regular', marginTop: 10, color: 'red' }}>Close</Text>
                            {/* <Icon name='checkmark-circle-outline' type='ionicon' color='#1c96c5' size={30} /> */}
                            {/* <MaterialCommunityIcons name="mdiCloseCircle" color={'red'} size={26}/> */}
                        </Pressable>
                        <View style={{ paddingLeft: 10 }}>
                            {/* <Text style={{fontWeight: 'bold'}}>Unsaved Location</Text>
            <Text>B12, Row C,Gulshan e Iqbal, Block 5...</Text> */}
                        </View>

                    </View>
                    {/* <View style={styles.locationDiv}>
            <View style={styles.locationButton}>
              {/* <Icon name='arrow-top-right' type='material-community' color='green'/> */}
                    {/* <Text style={{paddingLeft: 10, color: 'green', fontWeight: '800'}}>Use my current location</Text>
            </View>
            <View style={styles.locationButton}>
              {/* <Icon name='location' type='evilicon' color="green"/> */}
                    {/* <Text  style={{paddingLeft: 10, color: 'green', fontWeight: '800'}} >Select new location</Text>
            </View>
          </View> */}
                    <ScrollView showsVerticalScrollIndicator={true}>
                        <TouchableOpacity activeOpacity={3}>
                            <View
                                style={{
                                    // flexDirection: 'row',
                                    // justifyContent : 'space-between',
                                    paddingVertical: 8,
                                }}>
                                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20 }}>Caloric Intake</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular' }}>{`If we consistently take in more energy than we need, we will gain weight. If we take in too little energy, we will lose weight, fat, and eventually muscle mass.

The definition of a calorie is the amount of energy needed to raise the temperature of 1 gram (g) of water through 1° Celsius.

The type and amount of food we eat determine how many calories we consume. For many people on a weight-loss diet, the number of calories in a food is a deciding factor in choosing whether or not to eat it.

How and when we eat can also make a difference, as the body uses energy differently throughout the day. Our body’s energy use will depend on how active we are, how efficiently our body uses the energy, and our age.`}</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>

                </RBSheet>
                
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   paddingTop: StatusBar.currentHeight,
    // },
    scrollView: {
        backgroundColor: '#F2F2F2',
        // marginHorizontal: 20,
    },
    linearGradient: {
        flex: 1,
        borderRadius: 19,

    },
    text: {
        fontSize: 42,
        fontFamily: 'Poppins'
    },
    bigCard: {
        backgroundColor: '#f2f2f2',
        borderTopLeftRadius: 350,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1
    },
    innerCard: {
        // height: Dimensions.get('window').height,
        // width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    imageWrapper: {
        height: 200,
        width: 200,
        overflow: "hidden",
        borderRadius: 20,
        flex: 0,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    theImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        opacity: 0.4,
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
});