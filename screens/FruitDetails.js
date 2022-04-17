import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const FruitDetails = ({route}) =>{
    // title = FName
    // const t = route.params.name;
    // const n = props[1]
    // const n = props.data
    return (
    <View style={styles.container}>
        <View style={{alignContent: 'center'}}>
        <Text style={{paddingTop: 30,paddingBottom: 20, fontFamily: 'Poppins-Medium', fontSize: 18}}>{`${route.params.name}s have the following nutritional composition:`}</Text>
      </View>
      {route.params.nut.map((item, index)=>{
      return (
          <Text style={styles.text}>{`${item[0]}:    ${item[1]}
`}</Text>
        //   <View>
        //       {item.map((subItems, sIndex)=>{
        //           return (<Text style={{flexDirection: 'row'}}>{`${subItems}
                  
                  
        //           `}</Text>)
        //       })}
        //   </View>
      )
    }
      )}
      {/* {route.params.nut.map((item)=>{<Text>{item}</Text>})} */}
    </View>
  )
}
const styles = StyleSheet.create({
    name: {
        fontFamily: 'Poppins-Medium',
        fontSize: 30
    },
    container: {
        backgroundColor: '#f2f2f2',
        borderTopLeftRadius: 350,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        paddingHorizontal: 30,
        
    },
    text:{
        // paddingVertical: 1,
        flex: 2,
        fontFamily: 'Poppins-Regular',
    }
})
export default FruitDetails;