import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Head from '@/src/components/Header/Head'
import Room from '@/src/components/Rooms/Room'



export default function HomeType() {
  return (
    <View style={styles.container}>
        <Head/>
        <Room/>

    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",

  },
})