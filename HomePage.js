import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Button, Image, TouchableHighlight } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Modal from "react-native-modal";
import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import {Camera} from 'expo-camera';
import Swiper from 'react-native-deck-swiper';
import Card from './Card';
import Vote from './Vote';

import { Amplify, Auth } from 'aws-amplify';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const primaryColor = '#ffffff';
const secondaryColor = '#0000000';
const accentColor = '#e0e0e0';
const headerTextSize = "30%";
const subTextSize = "18%";
const parTextSize = "15%";
const streak = 23;

export default function HomePage ({navigation}) {
  
    const [isModal3Visible, setModal3Visible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModal2Visible, setModal2Visible] = useState(false);
    const [isVotingVisible, setVotingVisible] = useState(true);

    const [user, setUser] = useState({});

  const toggleModal = () => {
    setModalVisible(false);
  };
  const toggleModal2 = () => {
    setModal2Visible(!isModal2Visible);
  };
  const toggleModal3 = () => {
    setModal3Visible(!isModal3Visible);
  };
  const toggleVotingVisible = () => {
    setVotingVisible(!IsVotingVisible);
  };

  const openCameraDaily = () => {
    navigation.navigate('CameraPage');
    setModalVisible(false);
  }

  const openCameraWeekly = () => {
    navigation.navigate('CameraPage2');
    setModal3Visible(false);
  }

  const openCameraMonthly = () => {
    navigation.navigate('CameraPage3');
    setModal2Visible(false);
  }

  const getCurrentUser = async () => {
    
    const authUser = await Auth.currentAuthenticatedUser()
      .then( user => {
        
        setUser(user);
      }).catch( err => {
        
        setUser(null);
      });
  }

  useEffect(() => {
    getCurrentUser();
  }, []);
  
  return (
    
    <View style={styles.container}>
      <Modal isVisible={isVotingVisible} style = {{width: windowWidth, height: windowHeight, alignSelf: 'center'}}>
        <Vote hideVote={() => setVotingVisible(false)}/>
      </Modal>
      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
            <View style = {styles.modalBox}>
                {/*<View style = {{width: 50, height: 50, backgroundColor: 'rgba(52, 52, 52, 0.5)', borderRadius: 30, position: 'absolute', top: 10, left: 10, flexDirection: 'column', justifyContent: 'center'}}>
                    <TouchableOpacity onPress = {toggleModal}>
                    <Ionicons name="arrow-back-outline" size={32} color= 'white' style = {{alignSelf: 'center'}}/>
                    </TouchableOpacity>
                </View>*/}
                <Text style = {{fontSize: headerTextSize, color: 'white', fontWeight: 'bold', paddingTop: 20}}>
                    Daily Challenge
                </Text>
                <Text style = {{fontSize: subTextSize, color: 'white', paddingTop: 20}}>
                    Drink a bottle of water
                </Text>
                <View style = {{width: 50, height: 50, backgroundColor: 'rgba(52, 52, 52, 0.5)', borderRadius: 30, position: 'absolute', bottom: 10, left: 10, flexDirection: 'column', justifyContent: 'center'}}>
                    <TouchableOpacity onPress = {toggleModal}>
                    <Ionicons name="arrow-back-outline" size={32} color= 'white' style = {{alignSelf: 'center'}}/>
                    </TouchableOpacity>
                </View>
                <View style = {{width: 50, height: 50, backgroundColor: 'rgba(52, 52, 52, 0.5)', borderRadius: 30, position: 'absolute', bottom: 10, right: 10, flexDirection: 'column', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => openCameraDaily()}>
                    <Ionicons name="camera" size={32} color= 'white' style = {{alignSelf: 'center'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
      <View style = {styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Account')} style = {{alignSelf: 'center'}}>
          <Ionicons name="person-circle-outline" size={48} color="black" style = {{alignSelf: 'center'}}/>
        </TouchableOpacity>
          <Text style = {{width: 70, height: 70, alignSelf: 'left'}}>Hello, {user.username}</Text>
          <View style = {styles.box}>
          <Ionicons name="flame" size={24} color="black" style = {{paddingHorizontal: 5}}/>
          <Text style = {{fontSize: 24, fontWeight: 'bold'}}>{streak}</Text>
          </View>
      </View>
      <View style = {styles.body}>
        <View style = {{right: 87.8, top: windowHeight*0.1}}>
          <TouchableOpacity onPress = {() => setModalVisible(true)} style = {{left: 0, top: 0, backgroundColor: '#ff5756', paddingHorizontal: 5, position: 'absolute', width: 95, height: 95, borderRadius: 50, flexDirection: 'row', justifyContent: 'center'}}><Image
            source={require('./assets/gear.png')}
            style = {{width: 80, height: 80, alignSelf: 'center', opacity: 0.3}}
        /></TouchableOpacity>
          <TouchableOpacity onPress = {toggleModal2} style = {{backgroundColor: '#38b7fe', paddingHorizontal: 5, position: 'absolute', top: 32, left: 98, width: 60, height: 60, borderRadius: 50, flexDirection: 'row', justifyContent: 'center'}}><Image
            source={require('./assets/play.png')}
            style = {{width: 50, height: 50, alignSelf: 'center', opacity: 0.3}}
        /></TouchableOpacity>
          <TouchableOpacity onPress = {toggleModal3} style = {{backgroundColor: '#ffbc59', paddingHorizontal: 5, position: 'absolute', top: 87, left: 55, width: 75, height: 75, borderRadius: 50, flexDirection: 'row', justifyContent: 'center'}}><Image
            source={require('./assets/mountain.png')}
            style = {{width: 65, height: 65, alignSelf: 'center', opacity: 0.3}}
        /></TouchableOpacity>
        </View>
        
        <Modal isVisible={isModal2Visible} onBackdropPress={() => setModal2Visible(false)}>
            <View style = {styles.modalBox2}>
                {/*<View style = {{width: 50, height: 50, backgroundColor: 'rgba(52, 52, 52, 0.5)', borderRadius: 30, position: 'absolute', top: 10, left: 10, flexDirection: 'column', justifyContent: 'center'}}>
                    <TouchableOpacity onPress = {toggleModal}>
                    <Ionicons name="arrow-back-outline" size={32} color= 'white' style = {{alignSelf: 'center'}}/>
                    </TouchableOpacity>
                </View>*/}
                <Text style = {{fontSize: headerTextSize, color: 'white', fontWeight: 'bold', paddingTop: 20}}>
                    Monthly Challenge
                </Text>
                <Text style = {{fontSize: subTextSize, color: 'white', paddingTop: 20}}>
                    Drink a bucket of water
                </Text>
                <View style = {{width: 50, height: 50, backgroundColor: 'rgba(52, 52, 52, 0.5)', borderRadius: 30, position: 'absolute', bottom: 10, left: 10, flexDirection: 'column', justifyContent: 'center'}}>
                    <TouchableOpacity onPress = {toggleModal2}>
                    <Ionicons name="arrow-back-outline" size={32} color= 'white' style = {{alignSelf: 'center'}}/>
                    </TouchableOpacity>
                </View>
                <View style = {{width: 50, height: 50, backgroundColor: 'rgba(52, 52, 52, 0.5)', borderRadius: 30, position: 'absolute', bottom: 10, right: 10, flexDirection: 'column', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => openCameraMonthly()}>
                    <Ionicons name="camera" size={32} color= 'white' style = {{alignSelf: 'center'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        <Modal isVisible={isModal3Visible} onBackdropPress={() => setModal3Visible(false)}>
            <View style = {styles.modalBox3}>
                {/*<View style = {{width: 50, height: 50, backgroundColor: 'rgba(52, 52, 52, 0.5)', borderRadius: 30, position: 'absolute', top: 10, left: 10, flexDirection: 'column', justifyContent: 'center'}}>
                    <TouchableOpacity onPress = {toggleModal}>
                    <Ionicons name="arrow-back-outline" size={32} color= 'white' style = {{alignSelf: 'center'}}/>
                    </TouchableOpacity>
                </View>*/}
                <Text style = {{fontSize: headerTextSize, color: 'white', fontWeight: 'bold', paddingTop: 20}}>
                    Weekly Challenge
                </Text>
                <Text style = {{fontSize: subTextSize, color: 'white', paddingTop: 20}}>
                    Drink a litre of water
                </Text>
                <View style = {{width: 50, height: 50, backgroundColor: 'rgba(52, 52, 52, 0.5)', borderRadius: 30, position: 'absolute', bottom: 10, left: 10, flexDirection: 'column', justifyContent: 'center'}}>
                    <TouchableOpacity onPress = {toggleModal3}>
                    <Ionicons name="arrow-back-outline" size={32} color= 'white' style = {{alignSelf: 'center'}}/>
                    </TouchableOpacity>
                </View>
                <View style = {{width: 50, height: 50, backgroundColor: 'rgba(52, 52, 52, 0.5)', borderRadius: 30, position: 'absolute', bottom: 10, right: 10, flexDirection: 'column', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => openCameraWeekly()}>
                    <Ionicons name="camera" size={32} color= 'white' style = {{alignSelf: 'center'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
      </View>
      <View style = {styles.footer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  header: {
    width: '100%',
    height: '100%',
    paddingHorizontal: windowWidth*0.025,
    paddingTop: '8%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 2,
  },

  body:{
    flex: 20,
  },

  box: {
    backgroundColor: accentColor,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  modalBox: {
      backgroundColor: '#ff5340',
      width: windowWidth*0.8,
      height: 250,
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      marginBottom: 100,
  },

  modalBox2: {
        backgroundColor: '#53a3db',
        width: windowWidth*0.8,
        height: 250,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 100,
    },

    modalBox3: {
        backgroundColor: '#ffbc59',
        width: windowWidth*0.8,
        height: 250,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 100,
    }

});
