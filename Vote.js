

 {/* <Swiper
        ref={swiper => {
            this.swiper = swiper;
        }}
        cards={['DO', 'MORE']}
        renderCard={(card) => {
            return (
                <Card />
            )
        }}
        onSwiped={(cardIndex) => {console.log(cardIndex)}}
        onSwipedAll={() => {setVotingVisible(false)}}
        backgroundColor={'rgba(52, 52, 52, 0)'}
        stackSize={5}
        cardIndex={0}>
        <TouchableOpacity onPress={() => this.swiper.swipeBack()} title='Swipe Back' style = {{position: 'absolute', right: 30, top: (windowHeight*0.5+100)}}>
            <View style = {{backgroundColor: "#9fd62f", padding: 10, borderRadius: 50, height: 60, width: 60}}>
            <Ionicons name="checkmark-outline" size={36} color='white' style = {{alignSelf: 'center'}}/>
            </View>
        </TouchableOpacity>
        <View style = {{backgroundColor: '#ff5340',position: 'absolute', left: 30, top: (windowHeight*0.5+100), padding: 10, borderRadius: 50, height: 60, width: 60}}>
            <Ionicons name="close-outline" size={36} color='white' style = {{alignSelf: 'center'}}/>
        </View>
    </Swiper> 


import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View } from 'react-native'

// demo purposes only
function * range (start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
} */}

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Modal from "react-native-modal";
import { Dimensions } from 'react-native';
import {Camera} from 'expo-camera';
import Swiper from 'react-native-deck-swiper';
import Card from './Card';
import React, {Component, useState} from 'react';

import { Amplify, Auth, DataStore, Storage } from 'aws-amplify';
import { Challenge, Post, Comment } from './src/models';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Vote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: [],
      feed: [],
      images: [],
      gotFeed: false,
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0
    }

    // await this.getFeed();
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card} - {index}</Text>
      </View>
    )
  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`);
    console.log('index', this.state.cardIndex);
    this.state.cardIndex ++;
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    });

    this.props.hideVote(false);
  };

  swipeLeft = () => {
    
    this.swiper.swipeLeft()
  };

  

  getFeed = async (params) =>  {
    
    try {

      const user = await Auth.currentAuthenticatedUser();

      const response = await DataStore.query(Post, p => p.username('eq', user.username).challenge('ne', null));
      // console.log('ds ', response);

      // var posts = response;
      var images = [];
      for (var post in response) {
        
        var image = await Storage.get(post?.filename);

        images.push(image);
        // images.push(image);
      }
      
      if (response) {
        
        return Promise.resolve({response, images});
      }
      
    } catch (e) {
      console.log(' get post error:', e.message);
      return Promise.reject(e.message);
    }
  }

  async componentDidMount() {
    console.log('mounted');

    // console.log('GET FEED');
    this.getFeed()
    
      .then( (data) => {

        // console.log('FEED',data);

        var feed = [];
        data.response.forEach((val, i) => {
          
          feed.push({post: data.response[i], image:  data.images[i] }); 
        })
        // console.log('FEED WITH IMAGW',feed);

        // this.setState({feed: data.response});
        // this.setState({images: data.images});
        this.setState({feed});
        this.setState({gotFeed: true});
      })
      .catch( () => {
        this.setState({feed: []});
        console.log('caught');
      });
  }
  
  render () {
    console.log('Vote render');
    return (
      <View style={styles.container}>
        {/* <Image
            style = {{borderRadius: 10, width: 200, height: 200, alignSelf: 'center'}}
            source={require('./assets/icon.png')}
        /> */}
        <Swiper
            cards={this.state.feed}
            cardIndex={this.state.cardIndex}
            renderCard={(card) => {

              console.log('render card vote page', card);
              // console.log(this.state.cardIndex);
              if (card == undefined && this.state.gotFeed == true) {
                console.log('need to exit');
                // return this.onSwipedAllCards();
                // this.swiper.state.swipedAllCards = true;
                // this.swiper.onSwipedAll();
                this.props.hideVote(false);
              }
              // if (card == undefined)
              
                return (
                    <View style = {{top: '30%', flexDirection: 'row', justifyContent: 'center'}}>
                        <Card post={card} img={ {uri: card?.image} }/>
                    </View>
                )
            }}
          ref={swiper => {
            this.swiper = swiper
          }}
          backgroundColor={'rgba(52, 52, 52, 0)'}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          cardVerticalMargin={80}
          onSwipedAll={() => {this.onSwipedAllCards()}}
          // stackSize={3}
          stackSeparation={15}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
        <View style = {{top: 720}}>
        </View>
        
        
        </Swiper>
        <TouchableOpacity onPress={() => this.swiper.swipeRight()} title='Swipe Back' style = {{position: 'absolute', right: 50, bottom: 150}}>
            <View style = {{backgroundColor: "#9fd62f", padding: 10, borderRadius: 50, height: 60, width: 60}}>
            <Ionicons name="checkmark-outline" size={36} color='white' style = {{alignSelf: 'center'}}/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.swiper.swipeLeft()} title='Swipe Back' style = {{position: 'absolute', left: 50, bottom: 150}}>
            <View style = {{backgroundColor: '#ff5340', padding: 10, borderRadius: 50, height: 60, width: 60}}>
                <Ionicons name="close-outline" size={36} color='white' style = {{alignSelf: 'center'}}/>
            </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
    paddingTop: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  }
})