import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import PhoneNum from './PhoneNum';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

const primaryColor = '#ffffff';
const secondaryColor = '#0000000';
const accentColor = '#e0e0e0';
const headerTextSize = "30%";
const subTextSize = "18%";
const parTextSize = "15%";
const streak = 23;
export const CELL_SIZE = 40;
export const CELL_HEIGHT = 50;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';


export default function CodeEnter({navigation}) {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const CELL_COUNT = 6;


    return(

        <View style = {{flex: 1, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'start', paddingTop: 100}}>

        <Image
            style = {{borderRadius: 10, width: 200, height: 200, alignSelf: 'center'}}
            source={require('../assets/icon.png')}
        />
        <View style = {{paddingHorizontal: '10%'}}>
        <CodeField
            ref={ref}
            //caretHidden={false}//` when users can't paste a text value, because context menu doesn't appear
            value={value}
            autoFocus={true}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            selectionColor={'green'}
            renderCell={({index, symbol, isFocused}) => (
            <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? null : null)}
            </Text>
            )}
        /></View>
        <TouchableOpacity style = {{alignSelf: 'center', backgroundColor: '#ffbc59', paddingHorizontal: 20, margin: 20, height: 50, borderRadius: 10, flexDirection: 'row', justifyContent: 'center'}}
        onPress={() => navigation.navigate('Main')}>
            <Text style = {{alignSelf: 'center', color: primaryColor, fontWeight: 'bold', fontSize: '20%'}}>Confirm</Text>
        </TouchableOpacity>

        </View>

    );

}

const styles = StyleSheet.create({
    codeFieldRoot: {
        height: CELL_HEIGHT,
        paddingHorizontal: 20,
        justifyContent: 'center',
      },
      cell: {
        marginHorizontal: 8,
        height: CELL_HEIGHT,
        width: CELL_SIZE,
        lineHeight: CELL_HEIGHT - 10,
        ...Platform.select({web: {lineHeight: 65}}),
        fontSize: 30,
        textAlign: 'center',
        borderRadius: CELL_BORDER_RADIUS,
        color: '#3759b8',
        borderWidth: 2,
        borderColor: 'transparent',
        overflow: 'hidden',
        backgroundColor: '#f6f6f6',
        color: 'black',
    
        // IOS
        shadowOffset: {
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    
        // Android
        elevation: 3,
      },
      focusCell: {
          borderColor: '#b0b0b0',
      }
  });