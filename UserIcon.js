import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from './Card';
import { NavigationContainer } from '@react-navigation/native';


const primaryColor = '#ffffff';
const secondaryColor = '#0000000';
const accentColor = '#e0e0e0';
const headerTextSize = "30%";
const subTextSize = "18%";
const parTextSize = "15%";
const streak = 23;

export default function UserIcon(imgUrl) {

  return (
    <View style = {{borderRadius: 40, overflow: 'hidden', 
    
    shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2
    
    }}>
        <Image
        source={require('./assets/water.jpg')}
        style = {{width: 70, height: 70,}}
      />
    </View>
  );
}