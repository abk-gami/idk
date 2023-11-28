import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import { Button } from 'react-native';


const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showStatus, setShowStatus] = useState(false)
  return (
    <View style={{backgroundColor: '#ff0000', flex: 1,}}>
      <StatusBar backgroundColor={'green'} barStyle={'default'}  hidden={showStatus}/>

      <ActivityIndicator size={"large"} color={'black '} animating={isLoading}/>
      
      <Text style={{color: '#a9a9f3',}}>Hello World!</Text>
  
       <Button 
       color={'#00ff73'}
       title='Show'
       onPress={()=>  setIsLoading(true)} 
      />
       <Button 
       color={'#00ff73'}
       title='Hide'
       onPress={()=> setIsLoading(false)}
      />
 



    </View>
  )
}

export default App

const styles = StyleSheet.create({})