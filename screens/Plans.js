import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, Dimensions, Image, ImageBackground, Pressable, Modal } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { CardList } from 'react-native-card-list';
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from '@react-navigation/native';
// import { Icon, Slider } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { shadow } from 'react-native-paper';
// import DropShadow from "react-native-drop-shadow";
// import Modal from "react-native-modal";
// import {data} from '../assets/plans'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import DropShadow from "react-native-drop-shadow";
import { useEffect } from 'react';
import Swiper from 'react-native-swiper'

// import { Icon, Slider } from 'react-native-elements'

function Plans() {
    const refRBSheet = React.useRef();
    const [rippleColor, setRippleColor] = React.useState('grey');
    const navigator = useNavigation()
    const [rippleOverflow, setRippleOverflow] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false)
    const [activeIndex, setActiveIndex] = React.useState(false)
    const ref = React.useRef(null);
    useEffect(() => {
        setActiveIndex(0)
    }, [])
    const carouselItems = [
        {
            title: "Item 1",
            text: "Text 1",
            url: require("../assets/next.png"),
        },
        {
            title: "Item 2",
            text: "Text 2",
            url: '',
        },
        // {
        //     title:"Item 3",
        //     text: "Text 3",
        // },

    ]
    // function _renderItem({ item, index }) {
    //     const u = item.url
    //     return (
    //         <View style={{
    //             flexDirection: 'row',
    //             backgroundColor: 'floralwhite',
    //             borderRadius: 40,
    //             height: Dimensions.get('window').height * 0.65,
    //             padding: 50,
    //             marginLeft: 25,
    //             marginRight: 25,
    //             shadowColor: "black",
    //             shadowOffset: { height: 2 },
    //             shadowOpacity: 0.3,
    //         }}>
    //             <View style={{ flex: 5 }}>
    //                 <Text style={{ fontSize: 30 }}>{item.title} {item.url}</Text>
    //                 <Text>{item.text}</Text>
    //             </View>
    //             <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>

    //                 {item.url != '' ? (
    //                     <TouchableOpacity onPress={() => { setActiveIndex(1), ref.SwapSlide.snapToNext() }}>
    //                         <Image source={item.url} style={{ position: 'absolute', left: 30, height: 30, width: 30, shadowColor: 'rgba(118, 52, 170, 1)', shadowOpacity: 0.5, shadowRadius: 3 }} /></TouchableOpacity>) : null}
    //             </View>
    //         </View>

    //     )
    // }
    return (

        <View style={styles.bigCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 45, marginHorizontal: 10 }}>

                <View style={{ flex: 1, top: 2 }}>
                    <TouchableOpacity style={{ padding: 2, alignSelf: 'center', top: 0, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => { navigator.goBack() }}>
                        <Image source={require('../assets/back.png')} style={{ height: 18, width: 18 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignContent: 'center', flex: 4 }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#7634AA', alignSelf: 'center' }}>Select your plan</Text>
                </View>
                <View style={{ alignContent: 'center', flex: 1 }}>
                </View>
            </View>
            <View style={styles.innerCard}>

                {/* <View style={styles.imageWrapper}>
     <ImageBackground style={styles.theImage} source={require('../me.jpeg')}>
     <Text style={{fontFamily: 'Poppins-Medium', fontSize: 20, paddingBottom: 30, color: 'white'}}>Learn</Text>
     </ImageBackground>style={styles.container}
</View> */}
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>

                </View>
                <View style={{ alignSelf: 'center', flexDirection: 'column', alignItems: 'center', marginTop: 70, marginBottom: 40 }}>
                    <Swiper style={styles.wrapper} showsButtons={false} loop={false} activeDotColor='#7634AA' activeDotStyle={{ height: 10, width: 10, borderRadius: 100, marginHorizontal: 6 }} paginationStyle={{ marginTop: -50 }}>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: 'floralwhite',
                            borderRadius: 40,
                            height: Dimensions.get('window').height * 0.63,
                            width: Dimensions.get('window').width * 0.75,
                            padding: 50,
                            shadowColor: '#7634AA',
                            elevation: 7,
                            shadowRadius: 80,
                            shadowOpacity: 0.2,
                            shadowOffset: { width: 4, height: 50 },
                            borderTopColor: '#7634AA',
                            borderTopWidth: 0.07,
                            alignSelf: 'center'
                        }}>
                            <View style={{ flex: 0.125 }}>

                            </View>
                            <View style={{ flex: 4 }}>
                                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium' }}>Free</Text>
                                <View style={{flexDirection: 'row'}}>
                                <Text style={{fontSize: 30, fontFamily: 'Poppins-Bold', alignSelf: 'center' , marginBottom: 5}}>$0 </Text>
                                <Text style={{fontSize: 13,paddingBottom: 15,  fontFamily: 'Poppins-Light', alignSelf: 'center' , marginBottom: 5}}>/ month</Text>
                                </View>
                                <Text style={{ paddingBottom: 23, fontFamily: 'Poppins-Regular' }}>The basic package.</Text>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/check.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>Basic information on caloric intake</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/check.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>100 free detections</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/check.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>Nutritional outline of fruits</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/notCheck.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#d1d1d1', fontSize: 12 }}>Custom diet plan</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/notCheck.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#d1d1d1', fontSize: 12 }}>Personalized nutritional guidance from experts</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.125 }}>

                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: 'floralwhite',
                            borderRadius: 40,
                            height: Dimensions.get('window').height * 0.63,
                            width: Dimensions.get('window').width * 0.75,
                            padding: 50,
                            shadowColor: '#7634AA',
                            elevation: 7,
                            shadowRadius: 80,
                            shadowOpacity: 0.2,
                            shadowOffset: { width: 4, height: 50 },
                            borderTopColor: '#7634AA',
                            borderTopWidth: 0.07,
                            alignSelf: 'center'
                        }}>
                            <View style={{ flex: 0.125 }}>

                            </View>
                            <View style={{ flex: 4 }}>
                                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium' }}>Healthier</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 30, fontFamily: 'Poppins-Bold', alignSelf: 'center', marginBottom: 5 }}>$8.99 </Text>
                                    <Text style={{ fontSize: 13, paddingBottom: 15, fontFamily: 'Poppins-Light', alignSelf: 'center', marginBottom: 5 }}>/ month</Text>
                                </View>
                                <Text style={{ paddingBottom: 23, fontFamily: 'Poppins-Regular' }}>More features!</Text>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/check.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>Basic information on caloric intake</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/check.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>100 free detections</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/check.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>Nutritional outline of fruits</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/check.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>Custom diet plan</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/notCheck.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#d1d1d1', fontSize: 12 }}>Personalized nutritional guidance from experts</Text>
                                </View>
                                <View style={{ marginTop: 30 }}>
                                    <TouchableOpacity style={{ backgroundColor: '#7634AA', borderRadius: 20, height: 30, flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}></View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 4 }}>
                                            <Text style={{ flex: 4, color: 'white', fontFamily: 'Poppins-Regular' }}>
                                                Buy now
                                            </Text></View>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: -2 }}>
                                            <Image source={require('../assets/forward.png')} style={{ height: 15, width: 15 }} /></View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: 0.125 }}>

                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: 'floralwhite',
                            borderRadius: 40,
                            height: Dimensions.get('window').height * 0.63,
                            width: Dimensions.get('window').width * 0.75,
                            padding: 50,
                            shadowColor: '#7634AA',
                            elevation: 7,
                            shadowRadius: 80,
                            shadowOpacity: 0.2,
                            shadowOffset: { width: 4, height: 50 },
                            borderTopColor: '#7634AA',
                            borderTopWidth: 0.07,
                            alignSelf: 'center'
                        }}>
                            <View style={{ flex: 0.125 }}>

                            </View>
                            <View style={{ flex: 4 }}>
                                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium' }}>Premium</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 30, fontFamily: 'Poppins-Bold', alignSelf: 'center', marginBottom: 5 }}>$18.99 </Text>
                                    <Text style={{ fontSize: 13, paddingBottom: 15, fontFamily: 'Poppins-Light', alignSelf: 'center', marginBottom: 5 }}>/ month</Text>
                                </View>
                                <Text style={{ paddingBottom: 23, fontFamily: 'Poppins-Regular' }}>Best of the lot!</Text>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/check.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>Basic information on caloric intake</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/check.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>100 free detections</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/check.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>Nutritional outline of fruits</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/check.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>Custom diet plan</Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingBottom: 3 }}>
                                    <Image source={require('../assets/check.png')} style={{ height: 13, width: 13, marginRight: 12, top: 2 }} />
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>Personalized nutritional guidance from experts</Text>
                                </View>
                                <View style={{ marginTop: 30 }}>
                                    <TouchableOpacity style={{ backgroundColor: '#7634AA', borderRadius: 20, height: 30, flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}></View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 4 }}>
                                            <Text style={{ flex: 4, color: 'white', fontFamily: 'Poppins-Regular' }}>
                                                Buy now
                                            </Text></View>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: -2 }}>
                                            <Image source={require('../assets/forward.png')} style={{ height: 15, width: 15 }} /></View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: 0.125 }}>

                            </View>
                        </View>
                    </Swiper>

                    {/* <Carousel
          layout={"default"}
          layoutCardOffset={`30`}
          ref={ref}
          data={carouselItems}
          sliderWidth= {Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width-20}
          renderItem={_renderItem}
          activeSlideAlignment='center'
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={activeIndex}
              containerStyle={{ backgroundColor: '#f2f2f2' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(118, 52, 170, 1)'
              }}
              inactiveDotStyle={{
                  backgroundColor: 'black'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              style={{backgroundColor: '#f2f2f2'}}
            //   onBeforeSnapToItem = {true}
            /> */}
                </View>
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
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        // flex: 1
    },
    innerCard: {
        // height: Dimensions.get('window').height,
        // width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 40
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
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
});

export default Plans;