

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Vote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: [1],
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0
    }
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card} - {index}</Text>
      </View>
    )
  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`)
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render () {
    return (
      <View style={styles.container}>
        <Image
            style = {{borderRadius: 10, width: 200, height: 200, alignSelf: 'center'}}
            source={require('./assets/icon.png')}
        />
        <Swiper
            renderCard={(card) => {
                return (
                    <View style = {{top: '30%', flexDirection: 'row', justifyContent: 'center'}}>
                        <Card />
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
          cards={['1', '2', '3', '4', '5']}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          onSwipedAll={() => {this.props.hideVote(false)}}
          stackSize={3}
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