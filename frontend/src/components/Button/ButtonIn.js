import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

export default class ButtonIn extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} >Masuk</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button :{
        width :300,
        borderRadius :5,
        backgroundColor : '#F98F0B',
        marginVertical :10,
        paddingVertical :13
    },
    buttonText :{
        fontSize :16,
        fontWeight : '500',
        color : '#fff',
        textAlign :'center'
    }
})