import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStory from './Screens/WriteStory'
import ReadStory from './Screens/ReadStory'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import LoginScreen from './Screens/LoginScreen'

export default function App(){

  return (
<SafeAreaProvider>
<AppContainer/>
</SafeAreaProvider>


  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

const TabNavigator = createBottomTabNavigator({
  WriteStory:{
    screen:WriteStory,
    navigationOptions:{
      tabBarIcon:<Image source={require('./assets/write.png')}  style={{height:20,width:20}}/>,
      tabBarLabel:"WRITE STORY"
    }
  },
  ReadStory:{
    screen:ReadStory,
    navigationOptions:{
      tabBarIcon:<Image source={require('./assets/read.png')}  style={{height:20,width:20}}/>,
      tabBarLabel:"READ STORY"
    }
  }

})
const SwitchNavigator = createSwitchNavigator({

  Login:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
  
  })
const AppContainer = createAppContainer(SwitchNavigator)
