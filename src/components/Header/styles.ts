import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

 
  const styles =  StyleSheet.create({
        container:{
        flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            marginBottom: 10,
            justifyContent:'space-between'
        },
        title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 150,
        },
        main:{
        fontSize: 18,
        marginLeft: 10,
        color:'#0056b3',
        fontWeight:'bold'
        },
        img1:{
            marginRight:10,
        }
    })
export default styles