import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button, Image, TouchableOpacity, Dimensions} from 'react-native';
import { Camera } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from './Card';
import Vote from './Vote';
import { useNavigation } from '@react-navigation/native';
import UserIcon from './UserIcon';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const monthlyColor = '#38b7fe';
const ChallengeType = 3;

function HomeNav() {
    const navigation = useNavigation(); 
    return(
        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: windowWidth*0.025, paddingTop: 60}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View>
                    <Ionicons name="chevron-back-circle-outline" size={48} color="white" style = {{alignSelf: 'center'}}/>
                </View>
            </TouchableOpacity>
            <View style = {{backgroundColor: monthlyColor, paddingHorizontal: 30, flexDirection: 'column', justifyContent: 'center', borderRadius: 10}}>
                <Text style = {{color: 'white', fontWeight: 'bold', fontSize: '20%'}}t>Drink a bucket of water</Text>
            </View>
        </View>
    );
    }

export default function CameraPage3({navigation, route}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
})();
  }, []);

  const takePicture = async () => {
    if (camera) {

      const data = await camera.takePictureAsync(null)
      const filename = await route.params.uploadPhotoHandler( JSON.stringify(data.uri) );
      
      if (filename) {
        navigation.navigate('Home', {filename, ChallengeType});
      }
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
   <View style={{ flex: 1}}>
       
      <View style={styles.cameraContainer}>
            <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'1:1'} />
      </View>

      <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', position: 'absolute', top: 0}}>
        <HomeNav />
       </View>

      <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 0}}>
      <TouchableOpacity onPress={() => takePicture()} style = {{backgroundColor: monthlyColor, paddingHorizontal: 5, width: 95, position: 'relative', bottom: 50, height: 95, borderRadius: 50, flexDirection: 'row', justifyContent: 'center'}}><Image
            source={require('./assets/play.png')}
            style = {{width: 80, height: 80, alignSelf: 'center', opacity: 0.3}}
        /></TouchableOpacity></View>

    <View style = {{width: '100%', flexDirection: 'row', position:'absolute', justifyContent: 'center', bottom: 0, height: 95}}>
      <TouchableOpacity onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }} style = {{alignSelf: 'center', backgroundColor: 'white', paddingHorizontal: 5, width: 50, position: 'relative', bottom: 50, left: 100, height: 50, borderRadius: 50, flexDirection: 'row', justifyContent: 'center'}}>
        
        <Ionicons name="camera-reverse" size={36} color="black" style = {{alignSelf: 'center'}}/>   
        </TouchableOpacity></View>

      
   </View>
  );
}

{/*<Button
            title="Flip Image"
            style = {{position: 'absolute'}}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
        </Button>
       <Button title="Take Picture" onPress={() => takePicture()} />
        {image && <Image source={{uri: image}} style={{flex:1}}/>}*/}


const styles = StyleSheet.create({
  cameraContainer: {
      flex: 1,
      flexDirection: 'row'
  },
  fixedRatio:{
      flex: 1,
  }
})