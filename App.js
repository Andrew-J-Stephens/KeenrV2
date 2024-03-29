import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomePage';
import Feed from './Feed';
import Account from './AccountPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationEvents } from 'react-navigation';
import CameraPage from './CameraPage';
import CameraPage2 from './CameraPage2';
import CameraPage3 from './CameraPage3';
import Username from './signupFlow/Username';
import PhoneNum from './signupFlow/PhoneNum';
import CodeEnter from './signupFlow/CodeEnter';

const primaryColor = '#ffffff';
const secondaryColor = '#0000000';
const accentColor = '#e0e0e0';
const headerTextSize = "30%";
const subTextSize = "18%";
const parTextSize = "15%";
const streak = 23;


const Tab = createBottomTabNavigator();

function Home() {


  return (
    <Tab.Navigator


        screenOptions={({ route }) => ({
          tabBarStyle: { position: 'absolute', backgroundColor: 'rgba(500, 500, 500, 0.7)', borderWidth: 0, padding: 10, height: '15%' },
          headerShown: false, 
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'grid-sharp'
                : 'grid-outline';
            } else if (route.name === 'Feed') {
              iconName = focused ? 'heart-sharp': 'heart-outline' ;
            }

            return <Ionicons name={iconName} size={36} color={color}/>;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        })}
      >

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Feed" component={Feed} />
      </Tab.Navigator>
  );
}

function Login() {
  const Stack = createStackNavigator();
  return(
      <Stack.Navigator gestureEnabled = {false} >
        <Stack.Screen name = "Username" component = {Username} options = {{headerShown: false}} />
        <Stack.Screen name = "PhoneNum" component = {PhoneNum} options = {{headerShown: false}} />
        <Stack.Screen name = "CodeEnter" component = {CodeEnter} options = {{headerShown: false, gestureEnabled: false}} />
      </Stack.Navigator>
  );
}

export default function App() {

  const Stack = createStackNavigator();

  return (
    
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name = "Login" component = {Login} options = {{headerShown: false}} />
        <Stack.Screen
          name="Main"
          component={Home}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen name="Account" component={Account}
        options={{ headerShown: false }}
        />
        <Stack.Screen name="CameraPage" component={CameraPage} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="CameraPage2" component={CameraPage2} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="CameraPage3" component={CameraPage3} 
        options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}