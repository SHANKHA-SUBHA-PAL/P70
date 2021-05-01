import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements'
import firebase from 'firebase'
import db from '../config'

export default class WriteStory extends React.Component {
   constructor(){
super()
this.state={

title:'',
author:'',
story:''

}
   }
   
submitStory=()=>{

db.collection('Stories').add({

    tiltle:this.state.title,
    author:this.state.author,
    story:this.state.story,

})


}


    render() {
        return (
            <View>

                <Header
                    centerComponent={{ text: "WRITE STORY", style: { color: 'blue', fontSize: 20, fontWeight: 'bold' } }}

                    backgroundColor="#ff5722" />
                <View style={styles.keyBoardStyle}>
                    <TextInput style={styles.formTextInput}
                        placeholder="Enter Title Name" 
                        onChangeText={text=>{
                            this.setState({title:text})
                        }}/>

                    <TextInput style={styles.formTextInput}
                        placeholder="Enter Author Name" 
                        onChangeText={text=>{
                            this.setState({author:text})
                        }}/>

                    <TextInput style={[styles.formTextInput, { height: 275 }]}
                        placeholder="Write The Story Here"
                        multiline
                        numberOfLines={100}
                        onChangeText={text=>{
                            this.setState({story:text})
                        }}
                    />

                    <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        this.submitStory()
                    }}>
                        <Text>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    keyBoardStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formTextInput: {
        width: "75%",
        height: 35,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
    button: {
        width: "75%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#ff5722",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8, },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: 20
    },

})