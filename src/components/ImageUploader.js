import React from 'react';
import {View, Image, Button, StyleSheet} from 'react-native';
import { SafeAreaView, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ImageUploader = ({handleChoosePhoto, photo}) => {
  return (
          <TouchableOpacity onPress = {handleChoosePhoto}>
          {photo && <Image source={{uri: photo.uri}} style={styles.photo} />}
            <Ionicons name="arrow-up" size={32} color= 'white' style = {{alignSelf: 'center'}}/>
          </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageView: {
    width: '100%',
    height: '100%',
  },
});

export default ImageUploader;