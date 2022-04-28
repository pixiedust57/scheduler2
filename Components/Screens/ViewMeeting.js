import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import Home from './Home';
import Create from './Create';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    FlatList,
    useColorScheme,
    View,
  } 
  from 'react-native';
  import {TextInput, Button} from 'react-native-paper';

  const ViewMeeting =(props) =>{
const {_id,name,link} = props.route.params.item
  

      return(
        <View>
     
     
        <View>
        <Text style = {styles.bg}>{name} </Text>
        <Text style = {styles.bg}>{link}</Text>

<Button style = {styles.ButtonContainer} 

 mode="contained" onPress = {()=> props.navigation.navigate("Home")}
 
 
 >
    Schedule Meeting
   
  </Button>

  
</View>

        </View>
      )
      }


  const styles = StyleSheet.create({
bg: {
    padding: 20,
    fontSize : 30
},
ButtonContainer: {
    margin: 20,
    top : 150,
    padding : 10
},
  })
  export default ViewMeeting;