import { View, Text ,StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Room() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.question}>ماذا ستنقل اليوم؟</Text>
            <Text style={styles.description}>اختر نوع الغرفة او المساحة</Text>
        </View>

<View style={styles.griid}>
        <TouchableOpacity style={styles.feach} onPress={() => console.log(255)}>
            <View style={styles.icon}><Icon name="sofa" size={25}/></View>
            <Text style={styles.address}>غرفة معيشة</Text>
            <Text style={styles.description}>كتب , طاولة , تلفاز </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.feach} onPress={() => console.log(256)}>
            <View style={styles.icon}><Icon name="sofa" size={25}/></View>
            <Text style={styles.address}>غرفة معيشة</Text>
            <Text style={styles.description}>كتب , طاولة , تلفاز </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.feach} onPress={() => console.log(257)}>
            <View style={styles.icon}><Icon name="sofa" size={25}/></View>
            <Text style={styles.address}>غرفة معيشة</Text>
            <Text style={styles.description}>كتب , طاولة , تلفاز </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.feach} onPress={() => console.log(258)}>
            <View style={styles.icon}><Icon name="sofa" size={25}/></View>
            <Text style={styles.address}>غرفة معيشة</Text>
            <Text style={styles.description1}>كتب , طاولة , تلفاز </Text>
        </TouchableOpacity>
</View>

<View>
    <TouchableOpacity style={styles.blueButton}>
        <View style={styles.icon}><Icon name="warehouse" size={25}/></View>
        <Text style={styles.blueAddress}>منزل كامل</Text>
        <Text style={styles.description2}> خدمة النقل الشاملة لجميع الغرف </Text>
        <Icon name='arrow-left' size={35} style={styles.icon2}/>
    </TouchableOpacity>
</View>


</View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 20,
        justifyContent: 'flex-start',
        alignItems:'flex-end'
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 2,
        color: 'blue',

    },
    icon:{
    width: 60,               
    height: 60,             
    backgroundColor: '#E6EFFD', 
    justifyContent: 'center', 
    alignItems: 'center',    
    borderRadius: 12,       
    borderWidth: 1,      
    borderColor: '#023aac',
    position:"absolute",
    top:20,
    right:5
    },
    address:{},
    description:{
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
    },

    description1: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
    },
    feach:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    width: 150,               // العرض
    height: 150,   
    borderRadius: 12,        // حواف منحنية قليلاً (اختياري)
    borderWidth: 0.4,          // إطار حول المربع (اختياري)
    borderColor: '#023aac',
    margin:8,
    paddingRight:8,
    paddingBottom:4
    },
    griid:{
    flexDirection: 'row',     // ترتيب العناصر جنب بعض
    flexWrap: 'wrap',        // السماح للعناصر بالنزول لسطر جديد
    padding: 10,
    justifyContent: 'flex-start',
    },
    blueButton:{
        backgroundColor:'#dde3f0',
        width:335,
        height:150,
        borderRadius:30,
        borderWidth: 0.9,          // إطار حول المربع (اختياري)
        borderColor: '#023aac',

    },
    blueAddress:{
        fontSize:20,
        fontWeight:'bold',
        position:'absolute',
        top:20,
        right:80
    },
    description2:{
        fontSize:12,
        position:'absolute',
        top:60,
        right:70
    },
    icon2:{
        position:'absolute',
        top:55,
        left:10,

        
    }
});
