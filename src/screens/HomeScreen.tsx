import { View } from 'react-native'
import React from 'react'
import Header from '@/src/components/Header/Header'
import MainPage from '@/src/components/mainPage/mainPage'
export default function HomeScreen() {
  return (
    <View>
        <Header/>
        <MainPage/>
    </View>
)
}