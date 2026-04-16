import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'; // Import the Icon component
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View>
    <View style = {styles.container}>
     <Text style={styles.main} >الرئيسية</Text>
  {/*/<Image style={styles.img} source={require('@/src/assets/screen.png')}/>/*/}
  <TouchableOpacity style={styles.img1} onPress={() => navigation.goBack()}>
  <Icon name="arrow-forward" size={25} color={'#0056b3'} />
</TouchableOpacity>
    </View>
    </View>
  )
}