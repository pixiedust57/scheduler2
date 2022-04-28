

 import React, {useState} from 'react';
 import ABC from './CustomModule';
import Home from './Components/Screens/Home';
import Create from './Components/Screens/Create';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,Platform,
   StyleSheet,
   Text,
   Button,
   useColorScheme,
   View,
 } from 'react-native';
import ViewMeeting from './Components/Screens/ViewMeeting';
import { orange100 } from 'react-native-paper/lib/typescript/styles/colors';
 
 
const Stack = createStackNavigator();

 
 
 function App(){
 ABC.show();
   return (   
   
       <View style = {styles.container}>
        
     <Stack.Navigator>
       <Stack.Screen name = "REVA Sports" component = {Home} options ={{headerStyle: {backgroundColor: 'orange'}}}/>
       <Stack.Screen name = "Create" component = {Create}/>
       <Stack.Screen name = "ViewMeeting" component = {ViewMeeting}/>
     </Stack.Navigator>
     <StatusBar
         animated={true}
         backgroundColor="orange"
         barStyle={"dark-content"}
         translucent={true}
     />
     
      </View>
       
       
       // <StatusBar translucent backgroundColor="transparent" /> //makes completely transparent 
   );
 }
 export default () => {
   return(
     <NavigationContainer style = {styles.navigationContainer}>
       <App/>
     </NavigationContainer>
   )
 }
 
 const styles = StyleSheet.create({
   container:{
    //paddingTop:StatusBar.currentHeight,//status bar padding for transparent design
    textDecorationColor: 'black',
     flex:1,
     backgroundColor: '#d5d1eb' ,
     borderStartColor : 'red'
     
     
   },

   navigationContainer :{
     backgroundColor : 'orange100'
   }


 });
   
