
import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import {launchImageLibrary} from 'react-native-image-picker';


function App(): JSX.Element {

  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignSelf:'center'
    }} >
      <Button 
        title='Pick & Edit Video'
        onPress={()=>{
          launchImageLibrary({'mediaType':'video'},(res)=>{
            if(res.assets == null) {
              return;
            }
            const video = res.assets[0];
          })
      }} />
    </SafeAreaView>
  );
}


export default App;
