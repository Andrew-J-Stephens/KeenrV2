import React, {Component, useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity, FlatList, RefreshControl} from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import UserIcon from './UserIcon';
import MiniCard from './MiniCard';
import useForceUpdate from 'use-force-update';

import  { Dimensions, Pressable } from 'react-native';
import { Amplify, Auth, DataStore } from 'aws-amplify';
import { Challenge, Post, Comment } from './src/models';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function AccountList({posts}) {
  // console.log('account list posts', posts);

  const [refreshing, setRefreshing] = React.useState(false);
  const [userPosts, setUserPosts] = React.useState();

  const onRefresh = React.useCallback(() => {
    
    setRefreshing(true);

    posts.getPost()
      .then( (data) => {
        setUserPosts(data);
        setRefreshing(false)
      })
      .catch( () => {
        setRefreshing(false);
      });
    

    
  }, []);

  return(

    <FlatList
        data={userPosts}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({ item }) => (
            <View style = {{paddingLeft: windowWidth*0.0325, paddingTop: windowWidth*0.0325}}>
            <MiniCard post={item}/>
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
  
  const forceUpdate = useForceUpdate();

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
      <Pressable
        onPress={() => {
          
          Auth.signOut().then(() => {
            navigation.navigate('Login');  
          });
        }}
        >
            <Text>SIgn Out</Text> 
      </Pressable>
    </View>
  );
}

export default class AccountPage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    }

    // this.state.posts = await this.getPost();
    // console.log('res' ,res);
  }

  
  getPost = async (params) =>  {
    console.log('get posts');
    try {

      const user = await Auth.currentAuthenticatedUser();

      const response = await DataStore.query(Post, p => p.username('eq', user.username).challenge('ne', null));
      // console.log('data store response', response);

      if (response) {
        
        return Promise.resolve(response);
      }
      
    } catch (e) {
      console.log(' get post error:', e.message);
    }
  }

  render() {

    return (
      <View style = {{flex: 3}}>
      <View style = {{flex: 1}}>
          <HomeNav />
      </View>
      <View style = {styles.background}>
                  {/* Basic Usage */}
                  <AccountList posts={{getPost: this.getPost}}/>
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