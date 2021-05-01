import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements'

export default class WriteStory extends React.Component {
    render() {
        return (
            <View>

                <Header
                    centerComponent={{ text: "WRITE STORY", style: { color: 'blue', fontSize: 20, fontWeight: 'bold' } }}

                    backgroundColor="#ff5722" />
                <View style={styles.keyBoardStyle}>
                    <TextInput style={styles.formTextInput}
                        placeholder="Enter Book Name" />

                    <TextInput style={styles.formTextInput}
                        placeholder="Enter Author Name" />

                    <TextInput style={[styles.formTextInput, { height: 275 }]}
                        placeholder="Write The Story Here"
                        multiline
                        numberOfLines={100}
                    />

                    <TouchableOpacity style={styles.button}>
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