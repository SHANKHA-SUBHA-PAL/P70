import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'

export default class ReadStory extends React.Component{
render(){
    return(
        <View>
            <Header
                    centerComponent={{ text: "READ STORY", style: { color: 'blue', fontSize: 20, fontWeight: 'bold' } }}
                    backgroundColor="#ff5722" />
        </View>
    )
}

}