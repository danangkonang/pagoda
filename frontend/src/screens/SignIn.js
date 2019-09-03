import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native'

import InputIn from '../components/Input/InputIn'
import Logo from '../components/Logo/Logo'

export default class SignIn extends Component {

    render() {
        return (
            <View style={styles.container} >
                <StatusBar backgroundColor="#F7A207" barStyle="light-content" />
                <View style={styles.container} >
                
                </View>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Logo />
                    <InputIn navigate={this.props.navigation.navigate}/>
                </View>
                
                <View style={styles.singupText}>
                    <Text style={styles.singupTextContex}>Tidak memiliki akun?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.singupButton}> Daftar</Text>
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
        flexGrow :2,
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