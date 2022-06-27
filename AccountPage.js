import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity, FlatList, RefreshControl} from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import UserIcon from './UserIcon';
import MiniCard from './MiniCard';

import { Dimensions } from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function AccountList() {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return(

    <FlatList
        data={[1,2,3,4,5,6,7,8,9]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({ item }) => (
            <View style = {{paddingLeft: windowWidth*0.0325, paddingTop: windowWidth*0.0325}}>
            <MiniCard />
            </View>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        />

  );
}

function HomeNav() {

  const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(1000).then(() => setRefreshing(false));
    }, []);

    const navigation = useNavigation(); 
    return(
    <View>
    <TouchableOpacity onPress={() => navigation.goBack()} style = {{position: 'absolute', top: 60, left: 30}}>
        <View>
            <Ionicons name="chevron-back-circle-outline" size={48} color="black" style = {{alignSelf: 'center'}}/>
        </View>
    </TouchableOpacity>
    <View style = {{top: 60, alignSelf: 'center'}}>
        <UserIcon />
    </View>
    </View>
    );
    }

export default class AccountPage extends Component {


  constructor(props) {
    super(props);
  }

  
  render() {

    return (
    <View style = {{flex: 3}}>
    <View style = {{flex: 1}}>
        <HomeNav />
    </View>
    <View style = {styles.background}>
                {/* Basic Usage */}
                <AccountList />
            </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 5,
    width: '100%',
  },
  headline_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'white',
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '600',
  },
});