import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
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
        <Image source={require('../assets/fruitsandvegetables_Apple.png')} style={{ height: 70, width: 70, flex: 1 }} />
        <View style={styles.itemContainer}>
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 17, bottom: -24 }}>{title}</Text></View>
        <View style={{
            flex: 0.5, top: 13, right: 8, borderBottomWidth: 0.5,
            borderBottomColor: '#a1a1a1', opacity: 0.3
        }}>
            <Image source={require('../assets/right.png')} />
        </View>
    </View>
// </TouchableOpacity>
);

const App = () => {
    const navigator = useNavigation()

  const renderItem = ({ item }) => <TouchableOpacity onPress={()=>{navigator.navigate('FruitDetails', {"data": item['FName']})}}><Item title={item.FName} /> </TouchableOpacity>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item._id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -5,
        padding: 2,
  },
  item: {
    backgroundColor: '#f2f2f2',
        padding: 0,
        marginTop: 4,
        marginHorizontal: 10,
        flexDirection: 'row',
  },
  title: {
    fontSize: 32,
  },
});

export default App;