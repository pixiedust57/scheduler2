import { NavigationContainer } from '@react-navigation/native';
import React, {useState,useEffect} from 'react';
import {KeyboardAvoidingView,ScrollView,StyleSheet, Text, View, Modal,Alert, Linking} from 'react-native';

import {TextInput, Button} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';

const Create = (props) => {
const [name, setName] = useState("")
const [links, setLinks] = useState("")
const [modal, setModal] = useState(false)
const [enableShift, setEnableShift] = useState(false)

const submitData = () =>{
    fetch("http://10.0.2.2:3000/send-data",{
        method : "post",
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            name,
            link:links
        })
    }).then(res => res.json())
    .then(data=>{
        //console.log(data) will display data in console
        Alert.alert(`${data.name} is saved successfully`)
        props.navigation.navigate("Home")
    })
}



    return(
              
        <KeyboardAvoidingView behavior= "position" style = {StyleSheet.root} enabled = {enableShift}>
        <View >
<TextInput 

label = 'Name'
style = {styles.InputContainer}
value=  {name}
mode = 'outlined'
onFocus={()=> setEnableShift(false)}
onChangeText = { text => setName(text) }
/>

<TextInput 

label = 'Links'
style = {styles.InputContainer}
value=  {links}
onFocus={()=> setEnableShift(true)}
mode = 'outlined'
onChangeText = { text => setLinks(text) }


/>


<View>

<Button style = {styles.ButtonContainer} 

 mode="contained" onPress = {()=> console.log("damn")}
 
 
 >
    Schedule Meeting
   
  </Button>
<Button style = {styles.ButtonContainer} 

 mode="contained" onPress={()=> submitData()
 
 }>
    Submit
   
  </Button>
  
</View>
  <Modal
animationType= 'slide'
transparent = {false}
visible= {modal}
onRequestClose = {() =>{ //doesnt close application when back button is pressed
    setModal(false)
}
}
>
<Home/>
    </Modal>

</View>
</KeyboardAvoidingView>


    )
};

const styles = StyleSheet.create({
root : {
    backgroundColor : 'black',
    flex : 1,


},
InputContainer : {
    margin : 20,
    top: 150

},
ButtonContainer: {
    margin: 20,
    top : 150,
    padding : 10

},


})

export default Create;