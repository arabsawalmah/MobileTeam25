import { View, Text,Image,TouchableOpacity,  TextInput , ScrollView} from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function MainPage() {
 
    const [count, setCount] = useState(1);
  return (
    <ScrollView style={styles.mainPage}>
      <Image style={styles.State} source={require('@/src/assets/screen.png')}/>
      <Text style ={styles.title1}>تفاصيل المنقولات</Text>
      <Text style ={styles.title2}>يرجى تحديد الكميات والأوزان بدقة لنقترح لك وسيلة النقل الأمثل.</Text>



      <View style={styles.container}>
        <MaterialDesignIcons name="sofa-single" size={50} color="#002F66" style={styles.sofaIcon} />
        <View style ={styles.centerCont}>
          <View style={styles.bookTexts}>
          <Text style={styles.contText1}>كنبة الجلوس</Text>
          <Text style={styles.contText2}>غرفة المعيشة</Text>
          </View>
        
        <View style={styles.contCounter}>
     
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setCount(count + 1)}
      >
        <Icon name="plus" size={20} color="#000" />
      </TouchableOpacity>

      
      <Text style={styles.number}>{count}</Text>

   
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => count > 1 && setCount(count - 1)} // يمنع النزول تحت 1
      >
        <Entypo name="minus" size={20} color="#000" />
      </TouchableOpacity>
    </View>
        </View>
        <Text style={{alignSelf:'flex-end',marginTop:20,marginBottom:10,fontWeight:'bold',marginRight:20}}> الحجم</Text>
        <View style={styles.buttons}>
        <TouchableOpacity style ={styles.button3}  onPress={() => console.log('Button pressed') } ><Text>كبير</Text></TouchableOpacity>
        <TouchableOpacity style ={styles.button2}  onPress={() => console.log('Button pressed') } ><Text>متوسط</Text></TouchableOpacity>
        <TouchableOpacity style ={styles.button1}  onPress={() => console.log('Button pressed') } ><Text>صغير</Text></TouchableOpacity>

        </View>
        <Text style={{alignSelf:'flex-end',marginTop:20,marginBottom:10,fontWeight:'bold',marginRight:20}}>الوزن التقديري(كغم)</Text>
        <TextInput style={styles.input}
  placeholder="اكتب ملاحظاتك هنا..." 
  placeholderTextColor="#888"
/>
      </View>

      <View style ={styles.cards}>

      <View style={styles.container}>
        <MaterialDesignIcons name="sofa-single" size={50} color="#002F66" style={styles.sofaIcon} />
        <View style ={styles.centerCont}>
          <View style={styles.bookTexts}>
          <Text style={styles.contText1}>كنبة الجلوس</Text>
          <Text style={styles.contText2}>غرفة المعيشة</Text>
          </View>
        
        <View style={styles.contCounter}>
     
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setCount(count + 1)}
      >
        <Icon name="plus" size={20} color="#000" />
      </TouchableOpacity>

      
      <Text style={styles.number}>{count}</Text>

   
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => count > 1 && setCount(count - 1)} // يمنع النزول تحت 1
      >
        <Entypo name="minus" size={20} color="#000" />
      </TouchableOpacity>
    </View>
        </View>
        <Text style={{alignSelf:'flex-end',marginTop:20,marginBottom:10,fontWeight:'bold',marginRight:20}}> الحجم</Text>
        <View style={styles.buttons}>
        <TouchableOpacity style ={styles.button3}  onPress={() => console.log('Button pressed') } ><Text>كبير</Text></TouchableOpacity>
        <TouchableOpacity style ={styles.button2}  onPress={() => console.log('Button pressed') } ><Text>متوسط</Text></TouchableOpacity>
        <TouchableOpacity style ={styles.button1}  onPress={() => console.log('Button pressed') } ><Text>صغير</Text></TouchableOpacity>

        </View>
        <Text style={{alignSelf:'flex-end',marginTop:20,marginBottom:10,fontWeight:'bold',marginRight:20}}>الوزن التقديري(كغم)</Text>
        <TextInput style={styles.input}
  placeholder="اكتب ملاحظاتك هنا..." 
  placeholderTextColor="#888"
/>
      </View>


      </View>
     
      <TouchableOpacity style={styles.nextButton} >
      <Ionicons name="arrow-back" size={25} color={'white'} style={styles.nextButtonIcon} />
        <Text style={styles.nextButtonText}>تأكيد الحجز والذهاب للملخص</Text>
        
       
      </TouchableOpacity>
      
    </ScrollView>
    
  );
}