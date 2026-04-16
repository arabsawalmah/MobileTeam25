import { View, StyleSheet } from 'react-native'
import React from 'react'
import Header from '@/src/components/Header/Header'
import Room from '@/src/components/Rooms/Room'
import BottomNavBar from "@/src/components/Nav/BottomNavBar"



export default function HomeType() {
  return (
    <View style={styles.container}>
        <Header/>
        <Room/>
        <BottomNavBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",

  },
})