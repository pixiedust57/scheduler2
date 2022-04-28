import React, {useState,useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    ActivityIndicator,
    Text,
    Button,
    FlatList,
    useColorScheme,
    View,
    Alert,
  } 
  from 'react-native';
  import {Card, FAB} from 'react-native-paper'
import { purple100 } from 'react-native-paper/lib/typescript/styles/colors';
import { createStackNavigator } from '@react-navigation/stack';


  const Home = ({navigation}) =>{
     const [data, setData] = useState([])
     const [loading, setLoading] = useState(true)

    const fetchData = () =>{
      fetch("http://10.0.2.2:3000/")
      .then(res => res.json())
      .then(result=>{
        setData (result)
        setLoading(false)
      }).catch(err=>{
        Alert.alert("Somethin went wrong")
      })

    }

     useEffect(() =>{

      fetchData()
     
     },[])
      const renderList =((item) => {
          return(
<View style = {styles.root} >

<Card style = {styles.mycard} key={item.id}
 onPress={()=>navigation.navigate("ViewMeeting",{item})}
 >
<View style = {styles.cardView}>
<View style ={{marginLeft:10}}>
<Text style = {styles.text}>{item.name}</Text>
<Text style = {styles.text}>{item.links}</Text>

</View>
</View>
</Card>
</View>
     
       )
      })
      return(
        
        
       
       
     
          <View style = {{flex:1}}>
  
        <FlatList
        data={data}
        renderItem={({item}) =>{
            return renderList(item) 

        }}
        
        keyExtractor = {item => item._id}
        onRefresh={() => fetchData()}
        refreshing={loading}

        />
         
<FAB onPress = {()=> navigation.navigate("Create")}
    style={styles.fab}
    small = {false}
    icon="plus"
    theme={{colors:{accent:"orange"}}}
  
  />
  
          </View>
          
      
      )
  }
  const styles = StyleSheet.create({
    root:{
      
      flex: 1,
      flexDirection : 'column',
      

    },
      mycard:{
          margin:10,
          padding:10,
         flexDirection: 'row',
         backgroundColor:'black',
         
         
         
      },

      cardView:{
          color  : 'black',
          flexDirection: 'row',
          padding: 2
      },
      text:{
          color : 'white',
          fontSize: 20
          
      },
      fab: {
        position: 'absolute',
        
        margin: 16,
        
        
        right: 0,
        bottom: 0,
        
      },
  })
  export default Home;