import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default function Head() {
  return (
    <View style={styles.header}>
     
      <Text style={styles.TextPage}>لوجيستي</Text>

      <Text style={styles.TextAddress}>الصفحة الرئيسية</Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
    position: "absolute",
    right: 10,
  },
  TextAddress: {
    flex: 1,
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    right: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 180,
    marginLeft: 20,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 2,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        padding: 10,
  },
    TextPage: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "flex-end",
    marginRight: 20,
  },
});
