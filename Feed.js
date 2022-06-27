import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, RefreshControl } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from './Card';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Dimensions } from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const primaryColor = '#ffffff';
const secondaryColor = '#0000000';
const accentColor = '#e0e0e0';
const headerTextSize = "30%";
const subTextSize = "18%";
const parTextSize = "15%";
const streak = 23;

export default function Feed({navigation}) {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style = {styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Account')} style = {{alignSelf: 'center'}}>
          <Ionicons name="person-circle-outline" size={48} color="black" style = {{alignSelf: 'center'}}/>
      </TouchableOpacity>
          <View style = {styles.box}>
          <Ionicons name="flame" size={24} color="black" style = {{paddingHorizontal: 5}}/>
          <Text style = {{fontSize: 24, fontWeight: 'bold'}}>{streak}</Text>
          </View>
      </View>
      <View style = {styles.body}>
        <View style={styles.flatList}>
        <FlatList
            data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            ]}
            renderItem={({item}) => <View><Card /><View style = {{height: 10}}></View></View>}
            contentContainerStyle={{ paddingBottom: 130 }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
        />
        </View>
        
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

});
