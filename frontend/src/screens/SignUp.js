import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet, 
    StatusBar
} from 'react-native';

import Logo from '../components/Logo/Logo'
import InputUp from '../components/Input/InputUp'
import ButtonUp from '../components/Button/ButtonUp'

export default class SingUp extends Component {
    render() {
        return (
            <View style={styles.container} >
                <StatusBar backgroundColor="#F7A207" barStyle="light-content" />
                <View style={{  justifyContent: "center", alignItems: "center" }}>
                <Logo />
                <InputUp navigate={this.props.navigation.navigate}/>
            </View>
                <View style={styles.singupText}>
                    <Text style={styles.singupTextContex}>Sudah terdaftar? </Text>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('SignIn')}
                    >
                        <Text style={styles.singupButton}> Masuk</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        backgroundColor : '#F7A207',
        flex :1,
        justifyContent :'center',
        alignItems :'center'
    },
    singupText :{
        flexGrow :0.5,
        alignItems :'center',
        justifyContent :'center',
        paddingVertical : 16,
        flexDirection : 'row'
    },
    singupTextContex:{
        color :'rgba(255,255,255,0.7)',
        fontSize : 16
    },
    singupButton :{
        color :'#fff',
        fontSize :16,
        fontWeight :'500'
    }
})