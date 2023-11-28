import { StyleSheet, Text, View, Modal, Button} from 'react-native'
import React, {useState} from 'react';
import { StatusBar } from 'react-native';


const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={{backgroundColor: '#ff0000', flex: 1,}}>
      <StatusBar backgroundColor={'green'} barStyle={'default'}  />

      <Button 
      title='Open Modal'
      onPress={() => setIsModalVisible(true)}
      />

      



      <Text style={{color: '#a9a9f3',}}>Hello World!</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})