import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import MainPage from './mainPage';
const styles = StyleSheet.create({

mainPage:{

},
cards:{



},






State:{
    marginTop:0,
width: '100%',


},



title1:{
alignSelf:'flex-end',
marginRight:20,
marginTop:10,
fontSize:30,
fontWeight:'bold',
color:'#002F66',

}
,title2:{
    alignSelf:'flex-end',
    marginRight:20, 
    fontSize:12,
    color:'black',
}

,container:{
backgroundColor :'white',
width:300,
height:400,
margin:30,
borderRadius:10,
},
sofaIcon:{
alignSelf:'flex-end',
margin:20,
backgroundColor :'#E1E3E4',
width:100,
height:100,
padding:25,
borderRadius:10,

},
contText1:{
    alignSelf:'flex-end',
    fontWeight :'bold',
    fontSize:18,
    marginRight:20,
},
contText2:{
    alignSelf:'flex-end',
    marginRight:20,
},

  button: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 8,
    elevation: 2, // ظل خفيف للأندرويد
    shadowColor: '#000', // ظل للآيفون
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    minWidth: 20,
    textAlign: 'center',
  },
 
centerCont:{

    width :'100%',
    height:50, 
    flexDirection: 'row-reverse',
    justifyContent:'space-between',
},
bookTexts:{




},
contCounter: {

    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 5,

  },
buttons:{
width: '100%',
flexDirection:'row',
justifyContent:'space-around',
marginRight:20,
height:30,


},
button1:{

     width:'30%',
     height:30,
     borderRadius:10,
alignItems:'center',
borderColor:'black',
     borderWidth:1,
     
},
button2:{
   
    width:'30%',
    borderRadius:10,
    alignItems:'center',
    borderColor:'black',
     borderWidth:1,
     },
button3:{ 
  
     width:'30%',
     borderRadius:10,
     alignItems:'center',
     borderColor:'black',
     borderWidth:1,
    
},
input:{

    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
},


  nextButton:{
backgroundColor:'#0056D2',
width:'60%',
height:50,
marginBottom:200,
marginLeft:20,
borderRadius:10,
  },
  nextButtonText:{
paddingBottom:20,  
    color:'white',
    fontWeight:'bold',
    position:'absolute',
    paddingTop:13,
    marginLeft: 40,
   

  },

nextButtonIcon:{ 
position:'absolute',
marginLeft:10,
paddingTop:13,
},

  
});

export default styles