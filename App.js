import { StyleSheet, Text, View, Alert} from 'react-native'
import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import { Button } from 'react-native';


const App = () => {
  return (
    <View style={{backgroundColor: '#ff0000', flex: 1,}}>
      <StatusBar backgroundColor={'green'} barStyle={'default'}  />

      
      <Text style={{color: '#a9a9f3',}}>Hello World!</Text>
  
       <Button 
       color={'#00ff73'}
       title='Alert'
       onPress={() => Alert.alert('My name is Abubakar', 'I am in 300 Level',[
        {
          text:'OK',
          onPress: ()=> console.log('Ok pressed')
        },
        {
          text: 'Cancel',
          onPress: ()=> console.log('cancel pressed')
        },
        {
          text: 'maybe',
          onPress: ()=> console.log('maybe pressed')
        }
       ] )} 
      />
 



    </View>
  )
}

export default App

const styles = StyleSheet.create({})