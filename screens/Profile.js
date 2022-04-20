import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, ImageBackground, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { CardList } from 'react-native-card-list';
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from '@react-navigation/native';
// import { Icon, Slider } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {  } from 'react-native-gesture-handler';
import FruitDetails from '../assets/FruitDetails.json';
import DropShadow from "react-native-drop-shadow";

const Item = ({ title }) =>
(
    <View style={styles.item}>
        {/* <Image source={require('../assets/fruitsandvegetables_Apple.png')} style={{ height: 70, width: 70, flex: 1 }} /> */}
        <View style={styles.itemContainer}>
            {/* <Image source={require(im)}/> */}
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 17 }}>{title}</Text></View>
        {/* <View style={{
                    flex: 0.5, top: 10, right: 8, borderBottomWidth: 0.5,
                    borderBottomColor: '#a1a1a1', opacity: 0.3
                }}>
                    <Image source={require('../assets/right.png')} />
                </View> */}
        <View style={{ width: 10 }}></View>
    </View>
);
export default function Profile(props) {
    // useEffect(()=>{   USE THIS TO GET THE LATEST DETECTIONS (SPLIT)

    // }, [])
    const dat = Object.keys(FruitDetails).length < 5 ? FruitDetails : FruitDetails.slice(0, 6)
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => props.navigation.navigate("Fruit Details", { name: item.FName, nut: item.Nutrition })} >
            <Item title={item.FName} />
        </TouchableOpacity>
    );
    return (
        <LinearGradient colors={['rgba(118, 52, 170, 1)', 'rgba(18, 39, 151, 0.7256)']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
            style={styles.linearGradient}>

            <View style={styles.bigCard}>
                <View >
                    <View style={{ flexDirection: 'row', marginTop: 50, left: 10 }}>
                        <View style={{ borderRadius: 100, borderColor: '#e2e2e2', borderWidth: 0.85, padding: 2, alignSelf: 'flex-start', left: 40 }}
                            onPress={() => { navigator.navigate('Profile') }}>
                            <Image source={require('../me.jpeg')} style={{ borderRadius: 100, height: 90, width: 90 }} />
                        </View>

                        <View>
                            <Text style={{ position: 'absolute', top: 26, left: 50, fontFamily: 'Poppins-SemiBold', color: 'black', fontSize: 20, marginLeft: 10 }}>
                                Jhon Raza
                            </Text>
                            <Text style={{ position: 'absolute', top: 55, left: 50, fontFamily: 'Poppins-Regular', color: '#a5a5a5', fontSize: 13, marginLeft: 10 }}>
                                21 y, 75 KG
                            </Text>
                        </View>

                    </View>
                    <TouchableOpacity style={{
                        height: 90, width: 90, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end',
                        position: 'absolute',
                    }} onPress={() => { props.navigation.goBack() }}>
                        <Image source={require('../Fruitifyer-removebg-preview.png')} style={{

                            right: -30,
                            height: 90,
                            width: 90
                        }} />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', left: 50, marginTop: 50, fontSize: 14 }}>
                        Your nutritional history *
                    </Text>
                    <FlatList
                        data={dat}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ left: 50 }}
                    />
                    <View>
                        
                </View>
                <Text style={{ marginLeft: 50, fontSize: 8 }}>* A maximum of 5 latest detections</Text>
                </View>
                {/* <View style={{ flexDirection: 'column', justifyContent: 'center', alignSelf: 'center', marginVertical: 30, marginLeft: 70 }}>
                            <View style={{ alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <DropShadow style={{
                                    shadowColor: '#171717',
                                    shadowOffset: { width: 0, height: 3 },
                                    shadowOpacity: 0.4,
                                    shadowRadius: 2, position: 'absolute'
                                }}>
                                    <TouchableOpacity style={{ height: 130, width: 170, borderRadius: 25 }} onPress={() => { navigator.navigate('Details') }}>
                                        <LinearGradient colors={['rgba(118, 52, 170, 1)', 'rgba(18, 39, 151, 0.7256)']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.linearGradient}>
                                            <Image source={require('../assets/Box.png')} style={{ height: 170, width: 130, position: 'absolute', left: -20, top: -42 }} />
                                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, position: 'absolute', bottom: 5, right: 8, color: 'white' }}>Inform</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </DropShadow>

            </View> */}
                {/* </View> */}
            </View>

        </LinearGradient>
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
        right: 20
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
        // flex: 1
    },
    innerCard: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width - 20,
        justifyContent: 'center',
        alignItems: 'center'
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
    itemContainer: {
        // flex: 4,
        // width: Dimensions.get('window').width-10
        // marginRight: 5
        // borderBottomWidth: 0.5,
        // borderBottomColor: '#a1a1a1',
        marginRight: 15,
    },
    item: {
        backgroundColor: '#f2f2f2',
        padding: 0,
        marginTop: 4,
        // paddingRight: 10,
        // flexDirection: 'row',



        // borderColor: 
    },
});