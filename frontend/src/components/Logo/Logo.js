import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Image } from 'react-native'

export default class Input extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../assets/pagoda.png')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 150, 
        resizeMode: 'contain'
    }
})