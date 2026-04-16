import { Pressable, Text, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import NavBarStyles from "../constants/BottomNavBarStyles";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function NavBar() {
  return (

    <View style={NavBarStyles.nav}>
      <Pressable>
        <Text style={NavBarStyles.title}>الحساب</Text>
        <MaterialCommunityIcons name="account" size={24} color="black" />
      </Pressable>
      <Pressable>
        <Text style={NavBarStyles.title}>التنبيهات</Text>
        <Ionicons name="notifications" size={24} color="black" />
      </Pressable>
      <Pressable>
        <Text style={NavBarStyles.title}>نقلاتي</Text>
        <Feather name="truck" size={28} color="black" style={NavBarStyles.icon} />
      </Pressable>
      <Pressable>
        <Text style={NavBarStyles.title}>الرئيسية</Text>
        <Entypo name="home" size={28} color="black" style={NavBarStyles.icon} />
      </Pressable>
    </View>
  );
}
