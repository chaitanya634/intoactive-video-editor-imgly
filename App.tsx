
import React, { useEffect } from 'react'
import {
  Alert,
  Button,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { launchImageLibrary } from 'react-native-image-picker'
import { VESDK } from "react-native-videoeditorsdk"
import FileViewer from 'react-native-file-viewer';


const launchVideoEditor = () => launchImageLibrary(
  { 'mediaType': 'video' },
  (res) => {
    if (res.assets == null) {
      return
    }
    const video = res.assets[0];
    VESDK.openEditor(video.uri!).then((res) => {
      if (res == null) {
        return;
      }
      FileViewer.open(res.video,{showOpenWithDialog:true})
    })
  }
)

function App(): JSX.Element {
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
    }} >
      <Text style={{ textAlign: 'center', fontSize: 32, color: '#85929E', fontWeight: '500' }} >
        Intoactive
      </Text>
      <Text style={{ textAlign: 'center', color: '#85929E', fontSize: 18, marginBottom: 42 }} >
        Video Editor
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#58D68D',
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 12,
          elevation: 2
        }}
        onPress={launchVideoEditor}
      >
        <Text style={{ fontWeight: 'bold', textAlign: 'center' }} >Pick & Edit Video</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


export default App;
