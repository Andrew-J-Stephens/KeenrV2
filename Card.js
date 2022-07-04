import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import React, { useState } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const username = "AndrewS";
const thisPrompt = "Drink a bottle of water";


const primaryColor = '#ffffff';
const secondaryColor = '#0000000';
const accentColor = '#e0e0e0';
const headerTextSize = "30";
const subTextSize = 18;
const parTextSize = 15;
const streak = 23;



export default function Card() {

    const [heartColor, setHeartColor] = useState('white');
    function like() {
        if (heartColor == 'white'){
            setHeartColor("#ff5340")
        } else{
            setHeartColor("white")
        }
    }

  return (
    <View style = {styles.container}>
        <Image
        style = {{width: windowWidth*0.95, height: windowHeight*0.5, borderRadius: 10}}
        source={require('./assets/water.jpg')}
        />
        <View style = {styles.likeButton}>
            <TouchableOpacity style = {{alignSelf: 'center'}} onPress = {()=> like()}>
                <Ionicons name="heart" size={32} color={heartColor}/>
            </TouchableOpacity>
       </View>
        <View style = {styles.commentButton}>
            <Ionicons name="chatbubble-ellipses-sharp" size={32} color="white" style = {{alignSelf: 'center'}}/>
        </View>
        <View style = {styles.info}>
            <Ionicons name="person-circle-outline" size={48} color="white" style = {{alignSelf: 'center'}}/>
            <View style = {{flexDirection: 'column', alignSelf: 'center', paddingLeft: 10}}>
                <Text style = {{fontWeight: 'bold', 
                    fontSize: subTextSize, 
                    color: 'white'}}>{username}</Text>
                <Text style = {{ 
                    fontSize: parTextSize,
                    color: 'white'}}>{thisPrompt}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth*0.95,
        height: windowHeight*0.5,
        backgroundColor: accentColor,
        borderRadius: 10,
    },
    info: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '20%',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    likeButton: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 20,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    commentButton: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 20,
        position: 'absolute',
        top: 70,
        right: 10,
    },
});
