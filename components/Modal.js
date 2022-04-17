import Modal from "react-native-modal";
import { View, Text, StyleSheet, TouchableNativeFeedback, ScrollView, Dimensions, Image, ImageBackground, Pressable} from 'react-native'
import React from 'react'
export default function Modals() {
    return (
      <View>
        <Modal>
          <View style={{ flex: 1 }}>
            <Text>I am the modal content!</Text>
          </View>
        </Modal>
      </View>
    );
  }