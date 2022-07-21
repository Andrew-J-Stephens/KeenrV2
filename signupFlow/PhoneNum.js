import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import PhoneInput from "react-native-phone-number-input";
import 'firebase/compat/auth';
import { Auth } from 'aws-amplify';

const primaryColor = '#ffffff';
const secondaryColor = '#0000000';
const accentColor = '#e0e0e0';
const headerTextSize = "30%";
const subTextSize = "18%";
const parTextSize = "15%";
const streak = 23;


export default function PhoneNum({navigation, route}) {
  
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  // async function signInWithPhoneNumber(phoneNumber) {
  //   const confirmation = await uth().signInWithPhoneNumber(phoneNumber);
  //   setConfirm(confirmation);
  // }

  // function next(){
  //   // signInWithPhoneNumber("");
  //   navigation.navigate('CodeEnter', {userName: route.params.userName, password: route.params.password});
  // }

  async function createAccount (params)  {
    
    try {

        const {user} = await Auth.signUp(
          {
            username: params.userName, 
            password: params.password, 
            attributes: {
              phone_number: formattedValue,
            }
          }
        );

        console.log(user);
        
        navigation.navigate('CodeEnter', {userName: route.params.userName, password: route.params.password});

    } catch (err) {
        console.warn('error signing up, ', err);
    }
  }
    
    return(

        <View style = {{flex: 1, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'start', paddingTop: 100}}>
        <Image
            style = {{borderRadius: 10, width: 200, height: 200, alignSelf: 'center'}}
            source={require('../assets/icon.png')}
        />
        <View style = {{alignSelf: 'center'}}>
        {showMessage && (
            <View style={styles.message}>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )}
        <PhoneInput
            defaultValue={value}
            defaultCode="CA"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            autoFocus
            textContainerStyle = {{backgroundColor: '#f6f6f6', borderRadius: 10, height: 50}}
            textInputStyle = {{fontSize: '15%'}}
            codeTextStyle = {{fontSize: '15%', paddingBottom: 18}}

          /></View>
        <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity style = {{alignSelf: 'center', backgroundColor: '#38b6ff', paddingHorizontal: 20, margin: 20, height: 50, borderRadius: 10, flexDirection: 'row', justifyContent: 'center'}}
            onPress={() => navigation.navigate('Username')}>
                <Ionicons name="arrow-back-outline" size={'20%'} color="white" style = {{alignSelf: 'center', paddingRight: 10}}/>
                <Text style = {{alignSelf: 'center', color: primaryColor, fontWeight: 'bold', fontSize: '20%'}}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{alignSelf: 'center', backgroundColor: '#38b6ff', paddingHorizontal: 20, margin: 20, height: 50, borderRadius: 10, flexDirection: 'row', justifyContent: 'center'}}
            onPress={() => { createAccount(route.params)} }>
                <Text style = {{alignSelf: 'center', color: primaryColor, fontWeight: 'bold', fontSize: '20%'}}>Next</Text>
                <Ionicons name="arrow-forward-outline" size={'20%'} color="white" style = {{alignSelf: 'center', paddingLeft: 10}}/>
            </TouchableOpacity>
        </View>

        </View>

    );

}