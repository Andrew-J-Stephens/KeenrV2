import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Amplify, Auth, DataStore, Storage } from 'aws-amplify';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const username = "AndrewS";
const thisPrompt = "Drink a bottle of water";


const primaryColor = '#ffffff';
const secondaryColor = '#0000000';
const accentColor = '#e0e0e0';
const headerTextSize = "30%";
const subTextSize = "18%";
const parTextSize = "15%";
const streak = 23;



export default function MiniCard({post}) {

    const [heartColor, setHeartColor] = useState('white');
    const [image, setImage] = useState(null);

    function like() {
        if (heartColor == 'white'){
            setHeartColor("#ff5340")
        } else{
            setHeartColor("white")
        }
    }

    async function getImage() {

        const img = await Storage.get(post.filename);
        setImage({uri: img});
    }

    useEffect( () => {
        getImage();
    }, []);
    
  return (
    <View style = {styles.container}>
        <Image
        style = {{width: windowWidth*0.45, height: windowHeight*0.25, borderRadius: 10}}
        source={image}
        />
        <View style = {styles.likeButton}>
            <TouchableOpacity style = {{alignSelf: 'center'}} onPress = {()=> like()}>
                <Ionicons name="heart" size={32} color={heartColor}/>
            </TouchableOpacity>
       </View>
        <View style = {styles.info}>
            <Text >{post?.challenge.title}</Text>
            {/* <Ionicons name="person-circle-outline" size={48} color="white" style = {{alignSelf: 'center'}}/> */}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth*0.45,
        height: windowHeight*0.25,
        backgroundColor: accentColor,
        borderRadius: 10,
    },
    info: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '30%',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
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
