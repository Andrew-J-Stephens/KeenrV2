import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import React, { useState } from 'react';
import PhoneNum from './PhoneNum';

const primaryColor = '#ffffff';
const secondaryColor = '#0000000';
const accentColor = '#e0e0e0';
const headerTextSize = "30%";
const subTextSize = "18%";
const parTextSize = "15%";
const streak = 23;


export default function Username({navigation}) {

    return(

        <View style = {{flex: 1, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'start', paddingTop: 100}}>

        <Image
            style = {{borderRadius: 10, width: 200, height: 200, alignSelf: 'center'}}
            source={require('../assets/icon.png')}
        />
        <TextInput autoFocus={true} placeholder = "Username" style = {{backgroundColor: '#f6f6f6', width: '80%', height: 50, alignSelf: 'center', borderRadius: 10, paddingHorizontal: 20, fontSize: '15%'}}>

        </TextInput>
        <TouchableOpacity style = {{alignSelf: 'center', backgroundColor: '#ff5857', paddingHorizontal: 20, margin: 20, height: 50, borderRadius: 10, flexDirection: 'row', justifyContent: 'center'}}
        onPress={() => navigation.navigate('PhoneNum')}>
            <Text style = {{alignSelf: 'center', color: primaryColor, fontWeight: 'bold', fontSize: '20%'}}>Next</Text>
            <Ionicons name="arrow-forward-outline" size={'20%'} color="white" style = {{alignSelf: 'center', paddingLeft: 10}}/>
        </TouchableOpacity>

        </View>

    );

}