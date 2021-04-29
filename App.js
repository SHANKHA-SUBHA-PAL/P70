import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStory from './Screens/WriteStory'
import ReadStory from './Screens/ReadStory'

export default class App extends React.Component{
  render(){
  return (
<View style={styles.container}>
<AppContainer/>
</View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

const TabNavigator = createBottomTabNavigator({
  Writestory:{
    screen:WriteStory
  },
  ReacStory:{
    screen:ReadStory
  }

})
const AppContainer = createAppContainer(TabNavigator)
