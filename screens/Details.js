import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList, Image, TouchableOpacity, SafeAreaView
} from 'react-native';
import data from '../assets/FruitDetails.json'
import { useNavigation } from '@react-navigation/native';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
                {/* <Image source={require('../assets/fruitsandvegetables_Apple.png')} style={{ height: 70, width: 70, flex: 1 }} /> */}
                <View style={styles.itemContainer}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 17, bottom: -24 }}>{title}</Text></View>
                <View style={{
                    flex: 0.5, top: 10, right: 8, borderBottomWidth: 0.5,
                    borderBottomColor: '#a1a1a1', opacity: 0.3
                }}>
                    <Image source={require('../assets/right.png')} />
                </View>
            </View>
  );
  
  export default function Details ({navigation}){
    //   const navigation = useNavigation();
    //   const { navigate } = props.navigation;

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Fruit Details", {name: item.FName, nut: item.Nutrition})} >
      <Item title={item.FName} />
      </TouchableOpacity>
    );
    const goToNextScreen = (item) =>{
        
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }

// const DATA = [
//     {
//         id: "1",
//         title: "Apple",
//         img: `../assets/fruitsandvegetables_Apple.png`
//     },
// ];

// const Item = ({ name }) => {
//     // const t = 
//     return (
            

//     );
// }

// export default function Details() {
//     const = useNavigation()

//     const renderItem = ({item}) =>{
//         <Item name = {item.FName} />
//     }
//     return(
//         <View style={styles.container}>
//             <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 17, bottom: -24 }}>{data.length}</Text>
//             <FlatList 
//              data={data}
//             keyExtractor={item => item._id}
//             renderItem={renderItem}
            
//             />
//         </View>
//         )
// }

const styles = StyleSheet.create({
    container: {
        marginTop: -15,
        padding: 10,
    },
    item: {
        backgroundColor: '#f2f2f2',
        padding: 0,
        marginTop: 4,
        marginHorizontal: 10,
        flexDirection: 'row',

        // borderColor: 
    },
    itemContainer: {
        flex: 4.5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#a1a1a1',
        // marginRight: 5
    }
});