import React from "react";
import { Slot } from "expo-router";
import { ScrollView, View } from "react-native";
import BottomNavBar from "@/components/BottomNavBar";


export default function Layout (){
    return(
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <Slot />
            </View>

            <BottomNavBar />
        </View>
    );
}