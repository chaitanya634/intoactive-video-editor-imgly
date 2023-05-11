
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
import { CanvasAction, VESDK } from "react-native-videoeditorsdk"
import FileViewer from 'react-native-file-viewer';


const launchVideoEditor = () => launchImageLibrary(
  { 'mediaType': 'video' },
  (res) => {
    if (res.assets == null) {
      return
    }
    const video = res.assets[0];
    VESDK.openEditor(video.uri!,{
      audio: {
        canvasActions:[CanvasAction.PLAY_PAUSE],
        categories : [
          {
            identifier: 'Category1',
            name: 'Category 1',
            items: [
              {
                identifier:"allthat",
                audioURI: require("./assets/music/allthat.mp3"),
                title: 'All That',
                artist: 'Unknown',
              },
              {
                identifier:"creativeminds",
                audioURI: require("./assets/music/creativeminds.mp3"),
                title: 'Creative Minds',
                artist: 'Unknown',
              }
            ]
          },
          {
            identifier: 'Category2',
            name: 'Category 2',
            items: [
              {
                identifier:"dreams",
                audioURI: require("./assets/music/dreams.mp3"),
                title: 'Dreams',
                artist: 'Unknown',
              },
              {
                identifier:"elevate",
                audioURI: require("./assets/music/elevate.mp3"),
                title: 'Elevate',
                artist: 'Unknown',
              }
            ]
          },
          {
            identifier: 'Category3',
            name: 'Category 3',
            items: [
              {
                identifier:"evolution",
                audioURI: require("./assets/music/evolution.mp3"),
                title: 'Evolution',
                artist: 'Unknown',
              },
            ]
          },
        ]
      }
    }).then((res) => {
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
